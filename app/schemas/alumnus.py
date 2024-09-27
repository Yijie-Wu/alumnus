from typing import Optional

from pydantic import BaseModel


class AlumnusBase(BaseModel):
    alumnus_id: str  # 校友ID
    alumnus_type: str  # 校友类型
    photo: str  # 证件照
    old_photo: str  # 老照片
    alumnus_category: str  # 校友类别
    important_alumnus_type: str  # 重点校友类型
    alumnus_name: str  # 姓名
    alumnus_gender: str  # 性别
    birthday: str  # 出生日期
    nationality: str  # 国籍
    native_place: str  # 籍贯
    nation: str  # 民族
    politics_status: str  # 政治面貌
    enrollment_year: str  # 入学年份
    graduation_year: str  # 毕业年份
    student_number: str  # 学号
    education_background: str  # 学历
    department: str  # 院系
    major: str  # 专业
    class_name: str  # 班级
    show: bool
    meta: Optional[str] = "{}"


class CreateAlumnus(AlumnusBase):
    pass


class UpdateAlumnus(AlumnusBase):
    pass
