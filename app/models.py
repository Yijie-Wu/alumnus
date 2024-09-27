from datetime import datetime

from sqlalchemy.orm import relationship, Session
from sqlalchemy import Column, String, Integer, Boolean, ForeignKey, DateTime, Text

from app.extensions import Base
from app.settings import Settings

settings = Settings()


class Roles(Base):
    __tablename__ = 'roles'

    id = Column('id', Integer, autoincrement=True, primary_key=True)
    name = Column(String(60), unique=True)
    create_at = Column('create_at', DateTime, default=datetime.now)
    update_at = Column('update_at', DateTime, default=datetime.now, onupdate=datetime.now)
    users = relationship('User', back_populates='role')


class User(Base):
    __tablename__ = 'user'

    id = Column('id', Integer, autoincrement=True, primary_key=True)
    username = Column('username', String(254), default='')
    password_hash = Column('password_hash', String(200), default='')
    avatar = Column('avatar', String(200), default='avatar.png')
    created_at = Column('created_at', DateTime, default=datetime.now())
    updated_at = Column('updated_at', DateTime, default=datetime.now(), onupdate=datetime.now)
    role_id = Column('role_id', Integer, ForeignKey('roles.id'))
    role = relationship('Roles', back_populates='users')

    def init_role(self, db: Session):
        if self.role is None:
            if self.username.lower() == settings.APP.ADMIN_USERNAME.lower():
                self.role = db.query(Roles).filter_by(name='超级管理员').first()
            else:
                self.role = db.query(Roles).filter_by(name='普通用户').first()
            db.commit()


class Alumnus(Base):
    __tablename__ = 'alumnus'

    id = Column('id', Integer, autoincrement=True, primary_key=True)
    alumnus_id = Column('alumnus_id', String(200))  # 校友ID
    alumnus_type = Column('alumnus_type', String(200))  # 校友类型
    photo = Column('photo', String(200))  # 证件照
    old_photo = Column('old_photo', String(200))  # 老照片
    alumnus_category = Column('alumnus_category', String(200))  # 校友类别
    important_alumnus_type = Column('important_alumnus_type', String(200))  # 重点校友类型
    alumnus_name = Column('alumnus_name', String(200))  # 姓名
    alumnus_gender = Column('alumnus_gender', String(200))  # 性别
    birthday = Column('birthday', String(200))  # 出生日期
    nationality = Column('nationality', String(200))  # 国籍
    native_place = Column('native_place', String(200))  # 籍贯
    nation = Column('nation', String(200))  # 民族
    politics_status = Column('politics_status', String(200))  # 政治面貌
    enrollment_year = Column('enrollment_year', String(200))  # 入学年份
    graduation_year = Column('graduation_year', String(200))  # 毕业年份
    student_number = Column('student_number', String(200))  # 学号
    education_background = Column('education_background', String(200))  # 学历
    department = Column('department', String(200))  # 院系
    major = Column('major', String(200))  # 专业
    class_name = Column('class_name', String(200))  # 班级
    show = Column('show', Boolean, default=False)
    meta = Column('meta', Text, default="{}")
    create_at = Column('create_at', DateTime, default=datetime.now)
    update_at = Column('update_at', DateTime, default=datetime.now, onupdate=datetime.now)


class Config(Base):
    __tablename__ = 'config'

    id = Column('id', Integer, autoincrement=True, primary_key=True)
    name = Column('name', String(100))
    content = Column('content', Text, default="{}")
    create_at = Column('create_at', DateTime, default=datetime.now)
    update_at = Column('update_at', DateTime, default=datetime.now, onupdate=datetime.now)


class Search(Base):
    __tablename__ = 'search'

    id = Column('id', Integer, autoincrement=True, primary_key=True)
    q = Column(String(200))
    result = Column(String(200), default='')
    create_at = Column('create_at', DateTime, default=datetime.now)
