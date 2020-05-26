<template>
  <div>
    <div style="display: flex;justify-content: space-between">
      <el-button
        icon="el-icon-plus"
        type="primary"
        @click="showAddSalaryView"
      >
        添加工资账套
      </el-button>
      <el-button
        icon="el-icon-refresh"
        type="success"
        @click="initSalaries"
      />
    </div>
    <div style="margin-top: 10px">
      <el-table
        :data="salaries"
        border
        stripe
      >
        <el-table-column
          type="selection"
          width="55"
        />
        <el-table-column
          width="120"
          prop="name"
          label="账套名称"
          fixed=""
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
            label="养老金个人比率"
          />
          <el-table-column
            width="100"
            prop="pensionunitper"
            label="养老金公司比率"
          />
          <el-table-column
            width="100"
            prop="pensionsumper"
            label="养老金合计比率"
          />
          <el-table-column
            width="100"
            prop="medicalpersonalper"
            label="医疗个人比率"
          />
          <el-table-column
            width="100"
            prop="medicalunitper"
            label="医疗单位比率"
          />
          <el-table-column
            width="100"
            prop="medicalsumper"
            label="医疗合计比率"
          />
          <el-table-column
            width="100"
            prop="joblesspersonalper"
            label="失业个人比率"
          />
          <el-table-column
            width="100"
            prop="joblessunitper"
            label="失业单位比率"
          />
          <el-table-column
            width="100"
            prop="joblesssumper"
            label="失业合计比率"
          />
          <el-table-column
            width="100"
            prop="injury"
            label="工伤保险"
          />
          <el-table-column
            width="100"
            prop="birth"
            label="生育保险"
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
          width="100"
          prop="bonus"
          label="奖金"
        />
        <el-table-column
          width="100"
          prop="allsalary"
          label="总收入"
        />
        <el-table-column
          width="100"
          prop="createdate"
          label="创建时间"
        />
        <el-table-column
          width="100"
          prop="issuedate"
          label="发布时间"
        />

        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button @click="showEditSalaryView(scope.row)">
              编辑
            </el-button>
            <el-button
              type="danger"
              @click="deleteSalary(scope.row)"
            >
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog
      :title="dialogTitle"
      :visible.sync="dialogVisible"
      width="50%"
    >
      <div style="display: flex;justify-content: space-around;align-items: center">
        <el-steps
          direction="vertical"
          :active="activeItemIndex"
        >
          <el-step
            :title="itemName"
            v-for="(itemName,index) in salaryItemName"
            :key="index"
          />
        </el-steps>
        <el-input
          v-model="salary[title]"
          :placeholder="'请输入'+title+'...'"
          v-for="(value,title,index) in salary"
          :key="index"
          v-show="activeItemIndex==index"
          style="width: 200px"
        />
      </div>
      <span
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="preStep">{{ activeItemIndex==68?'取消':'上一步' }}</el-button>
        <el-button
          type="primary"
          @click="nextStep"
        >{{ activeItemIndex==68?'完成':'下一步' }}</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'SalSob',
  data () {
    return {
      dialogVisible: false,
      dialogTitle: '添加工资账套',
      salaries: [],
      activeItemIndex: 0,
      salaryItemName: [
        '套账名称',
        '基础工资',
        '工龄工资',
        '岗位工资',
        '基础绩效工资',
        '通讯补贴',
        '交通补贴',
        '注册补贴',
        '注册补发',
        '租房补贴',
        '租房补发',
        '独生子女补贴',
        '独生子女补贴补发',
        '回民',
        '烤火费',
        '防暑降温费',
        '物业补贴',
        '采暖补贴',
        '采暖补贴补发',
        '物业补贴补发',
        '补发费用',
        '扣款',
        '病事假',
        '应发合计',
        '养老金',
        '大额医疗',
        '职业年金',
        '公积金',
        '补扣职业年金',
        '补扣大额医疗',
        '补缴养老金',
        '补扣保险',
        '扣款合计',
        '补缴公积金',
        '补扣公积金',
        '会员费',
        '扣个税',
        '实发合计',
        '代发合计',
        '代扣合计',
        '还款',
        '实发工资',
        '补缴补充公积金',
        '应付工资',
        '缴费基数',
        '养老金个人比率',
        '养老金公司比率',
        '养老金合计比率',
        '医疗个人比率',
        '医疗单位比率',
        '医疗合计比率',
        '失业个人比率',
        '失业单位比率',
        '失业合计比率',
        '工伤保险',
        '生育险',
        '个人扣款合计',
        '大额医疗救助',
        '单位扣款合计',
        '月缴费金额',
        '缴费基数',
        '缴费比例',
        '个人',
        '单位',
        '月缴费合计',
        '补缴',
        '合计',
        '奖金',
        '总收入'
      ],
      salary: {
        name: '',
        basicwage: 0,
        senioritywage: 0,
        positionwage: 0,
        performancewage: 0,
        phoneallowance: 0,
        trafficallowance: 0,
        registallowance: 0,
        registsupply: 0,
        rentallowance: 0,
        rentsupply: 0,
        aloneallowance: 0,
        alonesupply: 0,
        hui: 0,
        fire: 0,
        cool: 0,
        propertyallowance: 0,
        warmallowance: 0,
        warmsupply: 0,
        propertysupply: 0,
        supply: 0,
        deduction: 0,
        sickpersonalleave: 0,
        sum: 0,
        pension: 0,
        largemedical: 0,
        occupationalannuity: 0,
        provident: 0,
        occupationalannuitydecuction: 0,
        largemedicaldeduction: 0,
        pensionback: 0,
        insurancededuction: 0,
        sumdeduction: 0,
        providentback: 0,
        providentdeduction: 0,
        member: 0,
        individual: 0,
        actualsum: 0,
        agencysum: 0,
        deductionsum: 0,
        repay: 0,
        actualwage: 0,
        addprovidentback: 0,
        total: 0,
        base: 0,
        pensionpersonalper: 0,
        pensionunitper: 0,
        pensionsumper: 0,
        medicalpersonalper: 0,
        medicalunitper: 0,
        medicalsumper: 0,
        joblesspersonalper: 0,
        joblessunitper: 0,
        joblesssumper: 0,
        injury: 0,
        birth: 0,
        personaldeduction: 0,
        ilargemedical: 0,
        unitsum: 0,
        month: 0,
        pbase: 0,
        per: 0,
        personal: 0,
        unit: 0,
        pmonth: 0,
        back: 0,
        ptotal: 0,
        bonus: 0,
        allsalary: 0
      }
    }
  },
  mounted () {
    this.initSalaries()
  },
  methods: {
    showEditSalaryView (data) {
      this.dialogTitle = '修改工资账套'
      this.dialogVisible = true
      this.salary.name = data.name
      this.salary.basicwage = data.basicwage
      this.salary.senioritywage = data.senioritywage
      this.salary.positionwage = data.positionwage
      this.salary.performancewage = data.performancewage
      this.salary.phoneallowance = data.phoneallowance
      this.salary.trafficallowance = data.trafficallowance
      this.salary.registallowance = data.registallowance
      this.salary.registsupply = data.registsupply
      this.salary.rentallowance = data.rentallowance
      this.salary.rentsupply = data.rentsupply
      this.salary.aloneallowance = data.aloneallowance
      this.salary.alonesupply = data.alonesupply
      this.salary.hui = data.hui
      this.salary.fire = data.fire
      this.salary.cool = data.cool
      this.salary.propertyallowance = data.propertyallowance
      this.salary.warmallowance = data.warmallowance
      this.salary.warmsupply = data.warmsupply
      this.salary.propertysupply = data.propertysupply
      this.salary.supply = data.supply
      this.salary.deduction = data.deduction
      this.salary.sickpersonalleave = data.sickpersonalleave
      this.salary.sum = data.sum
      this.salary.pension = data.pension
      this.salary.largemedical = data.largemedical
      this.salary.occupationalannuity = data.occupationalannuity
      this.salary.provident = data.provident
      this.salary.occupationalannuitydecuction = data.occupationalannuitydecuction
      this.salary.largemedicaldeduction = data.largemedicaldeduction
      this.salary.pensionback = data.pensionback
      this.salary.insurancededuction = data.insurancededuction
      this.salary.sumdeduction = data.sumdeduction
      this.salary.providentback = data.providentback
      this.salary.providentdeduction = data.providentdeduction
      this.salary.member = data.member
      this.salary.individual = data.individual
      this.salary.actualsum = data.actualsum
      this.salary.agencysum = data.agencysum
      this.salary.deductionsum = data.deductionsum
      this.salary.repay = data.repay
      this.salary.actualwage = data.actualwage
      this.salary.addprovidentback = data.addprovidentback
      this.salary.total = data.total
      this.salary.base = data.base
      this.salary.pensionpersonalper = data.pensionpersonalper
      this.salary.pensionunitper = data.pensionunitper
      this.salary.pensionsumper = data.pensionsumper
      this.salary.medicalpersonalper = data.medicalpersonalper
      this.salary.medicalunitper = data.medicalunitper
      this.salary.medicalsumper = data.medicalsumper
      this.salary.joblesspersonalper = data.joblesspersonalper
      this.salary.joblessunitper = data.joblessunitper
      this.salary.joblesssumper = data.joblesssumper
      this.salary.injury = data.injury
      this.salary.birth = data.birth
      this.salary.personaldeduction = data.personaldeduction
      this.salary.ilargemedical = data.ilargemedical
      this.salary.unitsum = data.unitsum
      this.salary.month = data.month
      this.salary.pbase = data.pbase
      this.salary.per = data.per
      this.salary.personal = data.personal
      this.salary.unit = data.unit
      this.salary.pmonth = data.pmonth
      this.salary.back = data.back
      this.salary.ptotal = data.ptotal
      this.salary.bonus = data.bonus
      this.salary.allsalary = data.allsalary
      this.salary.id = data.id
    },
    deleteSalary (data) {
      this.$confirm('此操作将删除【' + data.name + '】账套，是否继续？', '提示', {
        cancelButtonText: '取消',
        confirmButtonText: '确定'
      }).then(() => {
        this.deleteRequest('/salary/sob/' + data.id).then(resp => {
          if (resp) {
            this.initSalaries()
          }
        })
      }).catch(() => {
        this.$message.info('取消删除!')
      })
    },
    preStep () {
      if (this.activeItemIndex === 0) {
        return
      } else if (this.activeItemIndex === 68) {
        // 关闭对话框
        this.dialogVisible = false
        return
      }
      this.activeItemIndex--
    },
    nextStep () {
      if (this.activeItemIndex === 68) {
        if (this.salary.id) {
          this.putRequest('/salary/sob/', this.salary).then(resp => {
            if (resp) {
              this.initSalaries()
              this.dialogVisible = false
            }
          })
        } else {
          this.postRequest('/salary/sob/', this.salary).then(resp => {
            if (resp) {
              this.initSalaries()
              this.dialogVisible = false
            }
          })
        }
        return
      }
      this.activeItemIndex++
    },
    showAddSalaryView () {
      // 数据初始化,一共71个字段
      this.salary = {
        name: '默认名称',
        basicwage: 1,
        senioritywage: 2,
        positionwage: 3,
        performancewage: 4,
        phoneallowance: 5,
        trafficallowance: 6,
        registallowance: 7,
        registsupply: 8,
        rentallowance: 9,
        rentsupply: 10,
        aloneallowance: 11,
        alonesupply: 12,
        hui: 13,
        fire: 14,
        cool: 15,
        propertyallowance: 16,
        warmallowance: 17,
        warmsupply: 18,
        propertysupply: 19,
        supply: 20,
        deduction: 21,
        sickpersonalleave: 22,
        sum: 23,
        pension: 24,
        largemedical: 25,
        occupationalannuity: 26,
        provident: 27,
        occupationalannuitydecuction: 28,
        largemedicaldeduction: 29,
        pensionback: 30,
        insurancededuction: 31,
        sumdeduction: 32,
        providentback: 33,
        providentdeduction: 34,
        member: 35,
        individual: 36,
        actualsum: 37,
        agencysum: 38,
        deductionsum: 39,
        repay: 40,
        actualwage: 41,
        addprovidentback: 42,
        total: 43,
        base: 44,
        pensionpersonalper: 45,
        pensionunitper: 46,
        pensionsumper: 47,
        medicalpersonalper: 48,
        medicalunitper: 49,
        medicalsumper: 50,
        joblesspersonalper: 51,
        joblessunitper: 52,
        joblesssumper: 53,
        injury: 54,
        birth: 55,
        personaldeduction: 56,
        ilargemedical: 57,
        unitsum: 58,
        month: 59,
        pbase: 60,
        per: 61,
        personal: 62,
        unit: 63,
        pmonth: 64,
        back: 65,
        ptotal: 66,
        bonus: 67,
        allsalary: 68
      }
      this.dialogTitle = '添加工资账套'
      this.activeItemIndex = 0
      this.dialogVisible = true
    },
    initSalaries () {
      this.getRequest('/salary/sob/').then(resp => {
        if (resp) {
          this.salaries = resp
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
