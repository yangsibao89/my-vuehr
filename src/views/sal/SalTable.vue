<template>
  <div>
    <el-table
      :data="tableData"
      border
      style="width: 100%"
    >
      <el-table-column
        fixed
        prop="inmonth"
        label="工资月份"
        width="150"
      />
      <el-table-column
        prop="ename"
        label="姓名"
        width="120"
      />
      <el-table-column
        label="基本工资"
        align="center"
      >
        <el-table-column
          width="70"
          prop="basicwage"
          label="基础工资"
        />
        <el-table-column
          width="70"
          prop="senioritywage"
          label="工龄工资"
        />
        <el-table-column
          width="70"
          prop="positionwage"
          label="岗位工资"
        />
        <el-table-column
          width="70"
          prop="performancewage"
          label="基础绩效工资"
        />
        <el-table-column
          width="100"
          prop="phoneallowance"
          label="通讯补贴"
        />
        <el-table-column
          width="100"
          prop="trafficallowance"
          label="交通补贴"
        />
        <el-table-column
          width="100"
          prop="registallowance"
          label="注册补贴"
        />
        <el-table-column
          width="100"
          prop="registsupply"
          label="注册补发"
        />
        <el-table-column
          width="100"
          prop="rentallowance"
          label="租房补贴"
        />
        <el-table-column
          width="100"
          prop="rentsupply"
          label="租房补发"
        />
        <el-table-column
          width="100"
          prop="aloneallowance"
          label="独生子女补贴"
        />
        <el-table-column
          width="100"
          prop="alonesupply"
          label="独生子女补贴补发"
        />
        <el-table-column
          width="100"
          prop="hui"
          label="回民"
        />
        <el-table-column
          width="100"
          prop="fire"
          label="烤火费"
        />
        <el-table-column
          width="100"
          prop="cool"
          label="防暑降温费"
        />
        <el-table-column
          width="100"
          prop="propertyallowance"
          label="物业补贴"
        />
        <el-table-column
          width="100"
          prop="warmallowance"
          label="采暖补贴"
        />
        <el-table-column
          width="100"
          prop="warmsupply"
          label="采暖补贴补发"
        />
        <el-table-column
          width="100"
          prop="propertysupply"
          label="物业补贴补发"
        />

        <el-table-column
          width="100"
          prop="supply"
          label="补发费用"
        />
        <el-table-column
          width="100"
          prop="deduction"
          label="扣款"
        />
        <el-table-column
          width="100"
          prop="sickpersonalleave"
          label="病事假"
        />
        <el-table-column
          width="100"
          prop="sum"
          label="应发合计"
        />
        <el-table-column
          width="100"
          prop="pension"
          label="养老金"
        />
        <el-table-column
          width="100"
          prop="largemedical"
          label="大额医疗"
        />
        <el-table-column
          width="100"
          prop="occupationalannuity"
          label="职业年金"
        />

        <el-table-column
          width="100"
          prop="provident"
          label="公积金"
        />
        <el-table-column
          width="100"
          prop="occupationalannuitydecuction"
          label="补扣职业年金"
        />
        <el-table-column
          width="100"
          prop="largemedicaldeduction"
          label="补扣大额医疗"
        />
        <el-table-column
          width="100"
          prop="pensionback"
          label="补缴养老金"
        />
        <el-table-column
          width="100"
          prop="insurancededuction"
          label="补扣保险"
        />
        <el-table-column
          width="100"
          prop="sumdeduction"
          label="扣款合计"
        />
        <el-table-column
          width="100"
          prop="providentback"
          label="补缴公积金"
        />
        <el-table-column
          width="100"
          prop="providentdeduction"
          label="补扣公积金"
        />
        <el-table-column
          width="100"
          prop="member"
          label="会员费"
        />
        <el-table-column
          width="100"
          prop="individual"
          label="扣个税"
        />
        <el-table-column
          width="100"
          prop="actualsum"
          label="实发合计"
        />
        <el-table-column
          width="100"
          prop="agencysum"
          label="代发合计"
        />
        <el-table-column
          width="100"
          prop="deductionsum"
          label="代扣合计"
        />
        <el-table-column
          width="100"
          prop="repay"
          label="还款"
        />
        <el-table-column
          width="100"
          prop="actualwage"
          label="实发工资"
        />
        <el-table-column
          width="100"
          prop="addprovidentback"
          label="补缴补充公积金"
        />
        <el-table-column
          width="100"
          prop="total"
          label="应付工资"
        />
      </el-table-column>

      <el-table-column
        label="社保明细"
        align="center"
      >
        <el-table-column
          width="100"
          prop="base"
          label="缴费基数"
        />
        <el-table-column
          width="100"
          prop="pensionpersonalper"
          label="养老金个人比率8%"
        />
        <el-table-column
          width="100"
          prop="pensionunitper"
          label="养老金公司比率16%"
        />
        <el-table-column
          width="100"
          prop="pensionsumper"
          label="养老金合计比率24%"
        />
        <el-table-column
          width="100"
          prop="medicalpersonalper"
          label="医疗个人比率2%"
        />
        <el-table-column
          width="100"
          prop="medicalunitper"
          label="医疗单位比率10%"
        />
        <el-table-column
          width="100"
          prop="medicalsumper"
          label="医疗合计比率12%"
        />
        <el-table-column
          width="100"
          prop="joblesspersonalper"
          label="失业个人比率  0.5%"
        />
        <el-table-column
          width="100"
          prop="joblessunitper"
          label="失业单位比率  0.5%"
        />
        <el-table-column
          width="100"
          prop="joblesssumper"
          label="失业合计比率1%"
        />
        <el-table-column
          width="100"
          prop="injury"
          label="工伤保险0.55%"
        />
        <el-table-column
          width="100"
          prop="birth"
          label="生育保险0.5%"
        />
        <el-table-column
          width="100"
          prop="personaldeduction"
          label="个人扣款合计"
        />
        <el-table-column
          width="100"
          prop="ilargemedical"
          label="大额医疗救助"
        />
        <el-table-column
          width="100"
          prop="unitsum"
          label="单位扣款合计"
        />
        <el-table-column
          width="100"
          prop="month"
          label="月缴费金额"
        />
      </el-table-column>

      <el-table-column
        label="公积金明细"
        align="center"
      >
        <el-table-column
          width="100"
          prop="pbase"
          label="缴费基数"
        />
        <el-table-column
          width="100"
          prop="per"
          label="缴费比例"
        />
        <el-table-column
          width="100"
          prop="personal"
          label="个人"
        />
        <el-table-column
          width="100"
          prop="unit"
          label="单位"
        />
        <el-table-column
          width="100"
          prop="pmonth"
          label="月缴费合计"
        />
        <el-table-column
          width="100"
          prop="back"
          label="补缴"
        />
        <el-table-column
          width="100"
          prop="ptotal"
          label="合计"
        />
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="100"
      >
        <template slot-scope="scope">
          <el-button
            @click="handleClick(scope.row)"
            type="text"
            size="small"
          >
            查看
          </el-button>
          <el-button
            type="text"
            size="small"
          >
            编辑
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <div style="display: flex;justify-content: flex-end">
      <el-pagination
        background
        @size-change="sizeChange"
        @current-change="pageChange"
        layout="sizes, prev, pager, next, jumper, ->, total, slot"
        :total="total"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SalTable',
  data () {
    return {
      tableData: [],
      currentPage: 1,
      currentSize: 10,
      total: 0
    }
  },
  mounted () {
    this.initSalaryTable()
  },
  methods: {
    handleClick (row) {
      console.log(row)
    },
    sizeChange (size) {
      this.currentSize = size
      this.initSalaryTable()
    },
    pageChange (size) {
      this.currentSize = size
      this.initSalaryTable()
    },
    initSalaryTable () {
      this.getRequest('/salary/table/?page=' + this.currentPage + '&size=' + this.currentSize).then(resp => {
        if (resp) {
          console.log(resp)
          this.tableData = resp.data
          this.total = resp.total
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
