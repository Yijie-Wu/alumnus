import os

from sqlalchemy.orm import Session
from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.responses import Response, FileResponse

from app.models import User, Alumnus, Search
from app.extensions import get_rdbms
from app.schemas.user import User as UserSchema
from app.settings import load_app_settings
from app.cores.user import get_admin_user

router = APIRouter()
settings = load_app_settings()


@router.get('/admin', status_code=200, description='获取后台首页信息')
def admin_message(user: UserSchema = Depends(get_admin_user), db: Session = Depends(get_rdbms)):
    search_count = db.query(Search).count()
    alumnus_count = db.query(Alumnus).count()
    user_count = db.query(User).filter_by(role_id=2).count()
    admin_count = db.query(User).filter_by(role_id=1).count()

    return {
        'alumnus_count': alumnus_count, 'admin_count': admin_count,
        'user_count': user_count, 'search_count': search_count
    }
