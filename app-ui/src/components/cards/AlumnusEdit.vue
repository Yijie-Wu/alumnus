<script setup>
import {ref, reactive, defineProps, onMounted} from "vue";
import {useRouter} from "vue-router";
import {update_alumnus} from "../../apis/alumnus.js"
import {showMessage} from "../../utils/message.js"
import {calcFile} from "../../utils/common.js";
import {genFileId} from "element-plus";
import {Plus} from "@element-plus/icons-vue";
import {useAllAlumnusStore} from "../../stores/admin/alumnus.js";

const formRef = ref(null)
const router = useRouter()
const files = ref([])
const upload = ref(null)
const selectedID = ref(0)
const upload1 = ref(null)
const store = useAllAlumnusStore()
const upload_api = 'http://127.0.0.1:8000/upload/file'


const props = defineProps(['data'])


const form = reactive({
  alumnus_id: '',//校友ID
  alumnus_name: '',//姓名
  alumnus_gender: '',//性别
  birthday: '',//出生日期
  nationality: '',//国籍
  native_place: '',// 籍贯
  nation: '',//民族
  politics_status: '',// 政治面貌
  photo: '',//证件照
  old_photo: '',//老照片
  alumnus_type: '',//校友类型
  alumnus_category: '',//校友类别
  important_alumnus_type: '',//重点校友类型
  enrollment_year: '',// 入学年份
  graduation_year: '',//毕业年份
  student_number: '',//学号
  education_background: '',//学历
  department: '',//院系
  major: '',//专业
  class_name: '',//班级
  show: false,
})

const rules = reactive({
  alumnus_id: [
    {required: true, message: '校友ID不能为空', trigger: 'blur'},
    {min: 1, max: 200, message: '校友ID长度必须在1到200之间', trigger: 'blur'},
  ],
  alumnus_name: [
    {required: true, message: '校友名称不能为空', trigger: 'blur'},
    {min: 1, max: 200, message: '校友名称长度必须在1到200之间', trigger: 'blur'},
  ],
  alumnus_gender: [
    {required: true, message: '校友性别不能为空', trigger: 'blur'},
  ],
  birthday: [
    {required: true, message: '校友生日不能为空', trigger: 'blur'},
  ],
  nationality: [
    {required: true, message: '校友国籍不能为空', trigger: 'blur'},
  ],
  politics_status: [
    {required: true, message: '校友政治面貌不能为空', trigger: 'blur'},
  ],
  native_place: [
    {required: true, message: '校友籍贯不能为空', trigger: 'blur'},
  ],
  photo: [
    {required: true, message: '请上传校友照片', trigger: 'blur'},
  ],
  old_photo: [
    {required: true, message: '请上传校友老照片', trigger: 'blur'},
  ],
})

onMounted(() => {
  selectedID.value = props.data.id
  form.alumnus_id = props.data.alumnus_id
  form.alumnus_type = props.data.alumnus_type
  form.photo = props.data.photo
  form.old_photo = props.data.old_photo
  form.alumnus_category = props.data.alumnus_category
  form.important_alumnus_type = props.data.important_alumnus_type
  form.alumnus_name = props.data.alumnus_name
  form.alumnus_gender = props.data.alumnus_gender
  form.birthday = props.data.birthday
  form.nationality = props.data.nationality
  form.native_place = props.data.native_place
  form.nation = props.data.nation
  form.politics_status = props.data.politics_status
  form.enrollment_year = props.data.enrollment_year
  form.graduation_year = props.data.graduation_year
  form.student_number = props.data.student_number
  form.education_background = props.data.education_background
  form.department = props.data.department
  form.major = props.data.major
  form.class_name = props.data.class_name
  form.show = props.data.show
})


function handleSuccess(file) {
  files.value.push(file.filename);
  form.photo = file.filename;
  showMessage('success', '头像上传成功')
}

function handleError(err) {
  showMessage('error', '头像上传失败')
}

const handleExceed = (files) => {
  upload.value.clearFiles()
  const file = files[0]
  file.uid = genFileId()
  upload.value.handleStart(file)
  upload.value.submit()
}


function handleSuccess1(file) {
  files.value.push(file.filename);
  form.old_photo = file.filename;
  showMessage('success', '老照片上传成功')
}

function handleError1(err) {
  showMessage('error', '老照片上传失败')
}

const handleExceed1 = (files) => {
  upload1.value.clearFiles()
  const file = files[0]
  file.uid = genFileId()
  upload1.value.handleStart(file)
  upload1.value.submit()
}


const updateAlumnus = (formEl) => {
  formEl.validate(valid => {
    if (!valid) {
      return false
    }

    update_alumnus(selectedID.value, form).then(res => {
      store.updateAlumnus(res.data)
      router.go(0)
      showMessage('success', '更新校友成功')
    }).catch(err => {
      showMessage('error', err.message)
    })
  })
}

</script>

<template>
  <div class="container">
    <el-form ref="formRef" :model="form" :rules="rules" style="width:100%;" label-width="auto" label-position="left">
      <el-card>
        <template #header>
          <div class="card-header">
            <span>个人基本信息</span>
          </div>
        </template>
        <el-row :gutter="10">
          <el-col :span="24">
            <el-form-item style="margin-top:10px;" prop="alumnus_id" label="校友ID">
              <el-input v-model="form.alumnus_id" class="w-50 m-2" placeholder="校友ID" size="large" type="text" style="width: 40%;min-width:240px;"/>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item style="margin-top:10px;" prop="alumnus_name" label="校友姓名">
              <el-input v-model="form.alumnus_name" class="w-50 m-2" placeholder="校友姓名" size="large" type="text" style="width: 40%;min-width:240px;"/>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item style="margin-top:10px;" prop="alumnus_gender" label="校友性别">
              <el-input v-model="form.alumnus_gender" class="w-50 m-2" placeholder="校友性别" size="large" type="text" style="width: 40%;min-width:240px;"/>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item style="margin-top:10px;" prop="birthday" label="校友生日">
              <el-input v-model="form.birthday" class="w-50 m-2" placeholder="校友生日" size="large" type="text" style="width: 40%;min-width:240px;"/>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item style="margin-top:10px;" prop="nationality" label="校友国籍">
              <el-input v-model="form.nationality" class="w-50 m-2" placeholder="校友国籍" size="large" type="text" style="width: 40%;min-width:240px;"/>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item style="margin-top:10px;" prop="nationality" label="校友民族">
              <el-input v-model="form.nation" class="w-50 m-2" placeholder="校友民族" size="large" type="text" style="width: 40%;min-width:240px;"/>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item style="margin-top:10px;" prop="politics_status" label="政治面貌">
              <el-input v-model="form.politics_status" class="w-50 m-2" placeholder="政治面貌" size="large" type="text" style="width: 40%;min-width:240px;"/>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item style="margin-top:10px;" prop="native_place" label="校友籍贯">
              <el-input v-model="form.native_place" class="w-50 m-2" placeholder="校友籍贯" size="large" type="text"/>
            </el-form-item>
          </el-col>
        </el-row>
      </el-card>

      <el-card class="mt-1">
        <template #header>
          <div class="card-header">
            <span>更新校友头像/老照片</span>
          </div>
        </template>
        <el-row :gutter="10">
          <el-col :span="24" style="border-bottom: 1px solid lightgrey;">
            <div style="width: 100%;margin-bottom: 20px;display: flex;align-items: center;justify-content: space-between;">
              <div style="display: flex;align-items: flex-start;justify-content: flex-start;width: 49%;">
                <span style="margin-right: 65px;">当前头像</span>
                <el-image :src="calcFile(form.photo)" style="width:120px;height:120px;"></el-image>
              </div>
              <div style="display: flex;align-items: flex-start;justify-content: flex-start;width: 49%;">
                <span style="margin-right: 50px;">当前老照片</span>
                <el-image :src="calcFile(form.old_photo)" style="width:120px;height:120px;"></el-image>
              </div>
            </div>
          </el-col>
          <el-col :span="12">
            <el-form-item style="margin-top:10px;" prop="photo" label="头像">
              <el-upload
                  ref="upload"
                  :action="upload_api"
                  list-type="picture-card"
                  :auto-upload="true"
                  :show-file-list="true"
                  :v-model="files"
                  :limit="1"
                  :onSuccess="handleSuccess"
                  :onError="handleError"
                  :onExceed="handleExceed"
                  accept="image/*"
              >
                <el-icon>
                  <Plus/>
                </el-icon>
                <template #file="{ file }">
                  <div>
                    <img class="el-upload-list__item-thumbnail" :src="file.url" alt=""/>
                  </div>
                </template>
              </el-upload>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item style="margin-top:10px;" prop="old_photo" label="老照片">
              <el-upload
                  ref="upload1"
                  :action="upload_api"
                  list-type="picture-card"
                  :auto-upload="true"
                  :show-file-list="true"
                  :v-model="files"
                  :limit="1"
                  :onSuccess="handleSuccess1"
                  :onError="handleError1"
                  :onExceed="handleExceed1"
                  accept="image/*"
              >
                <el-icon>
                  <Plus/>
                </el-icon>
                <template #file="{ file }">
                  <div>
                    <img class="el-upload-list__item-thumbnail" :src="file.url" alt=""/>
                  </div>
                </template>
              </el-upload>
            </el-form-item>
          </el-col>
        </el-row>
      </el-card>

      <el-card class="mt-1">
        <template #header>
          <div class="card-header">
            <span>校友设置</span>
          </div>
        </template>
        <el-row :gutter="10">
          <el-col :span="24">
            <el-form-item style="margin-top:10px;" prop="alumnus_type" label="校友类型">
              <el-input v-model="form.alumnus_type" class="w-50 m-2" placeholder="校友类型" size="large" type="text" style="width: 40%;min-width:240px;"/>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item style="margin-top:10px;" prop="alumnus_category" label="校友类别">
              <el-input v-model="form.alumnus_category" class="w-50 m-2" placeholder="校友类别" size="large" type="text" style="width: 40%;min-width:240px;"/>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item style="margin-top:10px;" prop="important_alumnus_type" label="重点类型">
              <el-input v-model="form.important_alumnus_type" class="w-50 m-2" placeholder="重点校友类型" size="large" type="text"
                        style="width: 40%;min-width:240px;"/>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item style="margin-top:10px;" prop="enrollment_year" label="入学年份">
              <el-input v-model="form.enrollment_year" class="w-50 m-2" placeholder="入学年份" size="large" type="text" style="width: 40%;min-width:240px;"/>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item style="margin-top:10px;" prop="graduation_year" label="毕业年份">
              <el-input v-model="form.graduation_year" class="w-50 m-2" placeholder="毕业年份" size="large" type="text" style="width: 40%;min-width:240px;"/>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item style="margin-top:10px;" prop="student_number" label="校友学号">
              <el-input v-model="form.student_number" class="w-50 m-2" placeholder="校友学号" size="large" type="text" style="width: 40%;min-width:240px;"/>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item style="margin-top:10px;" prop="education_background" label="校友学历">
              <el-input v-model="form.education_background" class="w-50 m-2" placeholder="校友学历" size="large" type="text" style="width: 40%;min-width:240px;"/>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item style="margin-top:10px;" prop="department" label="校友院系">
              <el-input v-model="form.department" class="w-50 m-2" placeholder="校友院系" size="large" type="text" style="width: 40%;min-width:240px;"/>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item style="margin-top:10px;" prop="major" label="校友专业">
              <el-input v-model="form.major" class="w-50 m-2" placeholder="校友专业" size="large" type="text" style="width: 40%;min-width:240px;"/>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item style="margin-top:10px;" prop="class_name" label="校友班级">
              <el-input v-model="form.class_name" class="w-50 m-2" placeholder="校友班级" size="large" type="text" style="width: 40%;min-width:240px;"/>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item style="margin-top:10px;" prop="show" label="是否展示在首页">
              <el-switch v-model="form.show" class="w-50 m-2"></el-switch>
            </el-form-item>
          </el-col>
        </el-row>
      </el-card>

      <el-form-item style="margin:50px 0;" type="submit">
        <el-button type="primary" @click="updateAlumnus(formRef)" plain style="width: 100%;" size="large" round>更新校友信息</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped>
.container {
  width: 96%;
  margin: 10px auto;
  border-radius: 5px;
}

.mt-1 {
  margin-top: 1rem;
}


</style>