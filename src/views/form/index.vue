<template>
  <div class="app-container">
    <el-form
      ref="formInline"
      :inline="false"
      :model="formInline"
      class="demo-form-inline"
      hide-required-asterisk
    >
      <el-row :gutter="30">
        <el-col :sm="6" :xs="12">
          <el-form-item
            label="来源医院"
            prop="hospital"
            :rules="[
              { required: true, message: '医院名称不能为空' },
              { type: 'string', message: '医院名称错误' },
            ]"
          >
            <el-input v-model="formInline.hospital" placeholder="医院名称" />
          </el-form-item>
        </el-col>
        <el-col :sm="6" :xs="12">
          <el-form-item
            label="来源部门"
            prop="apart"
            :rules="[
              { required: true, message: '来源部门不能为空' },
              { type: 'string', message: '来源部门错误' },
            ]"
          >
            <el-input v-model="formInline.apart" placeholder="审批部门" />
          </el-form-item>
        </el-col>
        <el-col :sm="6" :xs="12">
          <el-form-item
            label="来源医生"
            prop="user"
            :rules="[
              { required: true, message: '来源医生不能为空' },
              { type: 'string', message: '来源医生错误' },
            ]"
          >
            <el-input v-model="formInline.user" placeholder="审批医生" />
          </el-form-item>
        </el-col>
        <el-col :sm="6" :xs="12">
          <el-form-item label="授权时间">
            <el-date-picker
              v-model="formInline.Time1"
              type="datetimerange"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              :default-time="['12:00:00']"
            />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="30">
        <el-col :sm="6" :xs="12">
          <el-form-item label="申请时间">
            <el-date-picker
              v-model="formInline.Time2"
              type="datetimerange"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              :default-time="['12:00:00']"
            />
          </el-form-item>
        </el-col>
        <el-col :sm="6" :xs="12" class="button-apart">
          <el-form-item class="button-apart">
            <el-button
              type="primary"
              @click="submitForm('formInline')"
            >查询</el-button>
            <el-button @click="resetForm('formInline')">重置</el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <el-table
      ref="multipleTable"
      :data="tableData"
      border
      stripe
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column align="center" type="selection" width="40" />
      <el-table-column
        align="center"
        fixed
        prop="id"
        label="编号"
        width="150"
      />
      <el-table-column
        align="center"
        prop="hospital"
        label="来源医院"
        width="150"
      />
      <el-table-column
        align="center"
        prop="apart"
        label="来源部门"
        width="120"
      />
      <el-table-column
        align="center"
        prop="name"
        label="来源医生"
        width="120"
      />
      <el-table-column
        align="center"
        prop="checkapart"
        label="检查科室"
        width="200"
      />
      <el-table-column
        align="center"
        prop="patientName"
        label="病人姓名"
        width="120"
      />
      <el-table-column
        align="center"
        prop="patientage"
        label="年龄"
        width="120"
      />
      <el-table-column
        align="center"
        prop="checkpart"
        label="检查部位"
        width="120"
      />
      <el-table-column
        align="center"
        prop="type"
        label="设备类型"
        width="120"
      />
      <el-table-column
        align="center"
        fixed="right"
        min-width="120"
        label="操作"
      >
        <template slot-scope="scope">
          <el-button
            type="text"
            @click="handleClick(scope.row)"
          >查看</el-button>
          <el-button type="text">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination-container flex-row">
      <el-pagination
        :current-page.sync="currentPage"
        :page-size="10"
        layout="prev, pager, next, jumper"
        :total="total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script>
import { Message } from 'element-ui'

export default {
  data() {
    return {
      // table
      tableData: [
        {
          id: '1',
          hospital: '中山医院',
          apart: '放射科',
          name: '张某某',
          checkapart: '放射科',
          patientName: '小明',
          patientage: '33',
          checkpart: '胸部正位',
          type: 'DX'
        },
        {
          id: '2',
          hospital: '中山医院',
          apart: '放射科',
          name: '张某某',
          checkapart: '放射科',
          patientName: '小明',
          patientage: '33',
          checkpart: '胸部正位',
          type: 'DX'
        },
        {
          id: '3',
          hospital: '中山医院',
          apart: '放射科',
          name: '张某某',
          checkapart: '放射科',
          patientName: '小明',
          patientage: '33',
          checkpart: '胸部正位',
          type: 'DX'
        },
        {
          id: '4',
          hospital: '中山医院',
          name: '张某某',
          apart: '放射科',
          city: '普陀区',
          checkapart: '放射科',
          patientName: '小明',
          patientage: '33',
          checkpart: '胸部正位',
          type: 'DX'
        },
        {
          id: '5',
          hospital: '中山医院',
          name: '张某某',
          apart: '放射科',
          city: '普陀区',
          checkapart: '放射科',
          patientName: '小明',
          patientage: '33',
          checkpart: '胸部正位',
          type: 'DX'
        },
        {
          id: '6',
          hospital: '中山医院',
          name: '张某某',
          apart: '放射科',
          city: '普陀区',
          checkapart: '放射科',
          patientName: '小明',
          patientage: '33',
          checkpart: '胸部正位',
          type: 'DX'
        },
        {
          id: '7',
          hospital: '中山医院',
          name: '张某某',
          apart: '放射科',
          city: '普陀区',
          checkapart: '放射科',
          patientName: '小明',
          patientage: '33',
          checkpart: '胸部正位',
          type: 'DX'
        },
        {
          id: '8',
          hospital: '中山医院',
          name: '张某某',
          apart: '放射科',
          city: '普陀区',
          checkapart: '放射科',
          patientName: '小明',
          patientage: '33',
          checkpart: '胸部正位',
          type: 'DX'
        },
        {
          id: '9',
          hospital: '中山医院',
          name: '张某某',
          apart: '放射科',
          city: '普陀区',
          checkapart: '放射科',
          patientName: '小明',
          patientage: '33',
          checkpart: '胸部正位',
          type: 'DX'
        },
        {
          id: '10',
          hospital: '中山医院',
          name: '张某某',
          apart: '放射科',
          city: '普陀区',
          checkapart: '放射科',
          patientName: '小明',
          patientage: '33',
          checkpart: '胸部正位',
          type: 'DX'
        }
      ],
      multipleSelection: [],
      // pagination
      currentPage: 1,
      total: 30,
      // form
      formInline: {
        hospital: '',
        apart: '',
        user: '',
        Time1: '',
        Time2: ''
      }
    }
  },
  methods: {
    // 处理表格点击
    handleClick(row) {
      console.log(row)
    },
    // 切换选择
    toggleSelection(rows) {
      if (rows) {
        rows.forEach((row) => {
          this.$refs.multipleTable.toggleRowSelection(row)
        })
      } else {
        this.$refs.multipleTable.clearSelection()
      }
    },
    // checkbox改变
    handleSelectionChange(val) {
      this.multipleSelection = val
    },
    // 处理当前分页数量发生变化
    handleSizeChange(val) {
      // console.log(`每页 ${val} 条`)
    },
    // 处理页数发生改变
    handleCurrentChange(val) {
      // console.log(`当前页: ${val}`)
    },
    // 处理表单提交
    submitForm(formName) {
      this.$refs[formName].validate((valid, msg) => {
        if (valid) {
          // alert('submit!')
        } else {
          for (const key in msg) {
            this.$message.closeAll()
            Message({
              message: msg[key][0].message,
              type: 'error',
              duration: 3 * 1000
            })
            return false
          }
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style scoped lang="scss">
.line {
  text-align: center;
}
.pagination-container {
  height: 30px;
  margin-top: 30px;
  justify-content: flex-end;
  align-items: center;
}

.demo-form-inline {
  margin-bottom: 30px;
}

.button-apart {
  height: 80px;

  ::v-deep .el-form-item__content {
    margin-top: 40px;
  }

  .el-button {
    width: 90px;
  }
}
</style>

