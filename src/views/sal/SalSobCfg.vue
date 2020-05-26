<template>
  <div>
    <div>
      <el-table
        :data="emps"
        border
        stripe
        size="mini"
      >
        <el-table-column
          type="selection"
          align="left"
          width="55"
        />
        <el-table-column
          prop="name"
          label="姓名"
          fixed
          width="120"
          align="left"
        />
        <el-table-column
          prop="workID"
          label="工号"
          width="120"
          align="left"
        />
        <el-table-column
          prop="email"
          label="电子邮件"
          width="200"
          align="left"
        />
        <el-table-column
          prop="phone"
          label="电话号码"
          width="120"
          align="left"
        />
        <el-table-column
          prop="department.name"
          label="所属部门"
          width="120"
          align="left"
        />
        <el-table-column
          label="所在套账"
          align="center"
        >
          <template slot-scope="scope">
            <el-tooltip
              placement="right"
              v-if="scope.row.salaryFull"
            >
              <div slot="content">
                <table>
                  <!-- 基本工资 -->
                  <tr>
                    <td>基础工资</td>
                    <td>{{ scope.row.salaryFull.basicwage }}</td>
                  </tr>
                  <tr>
                    <td>工龄工资</td>
                    <td>{{ scope.row.salaryFull.senioritywage }}</td>
                  </tr>
                  <tr>
                    <td>岗位工资</td>
                    <td>{{ scope.row.salaryFull.positionwage }}</td>
                  </tr>
                  <tr>
                    <td>基础绩效工资</td>
                    <td>{{ scope.row.salaryFull.performancewage }}</td>
                  </tr>
                  <tr>
                    <td>通讯补贴</td>
                    <td>{{ scope.row.salaryFull.phoneallowance }}</td>
                  </tr>
                  <tr>
                    <td>交通补贴</td>
                    <td>{{ scope.row.salaryFull.trafficallowance }}</td>
                  </tr>
                  <tr>
                    <td>注册补发</td>
                    <td>{{ scope.row.salaryFull.registsupply }}</td>
                  </tr>
                  <tr>
                    <td>租房补贴</td>
                    <td>{{ scope.row.salaryFull.rentallowance }}</td>
                  </tr>
                  <tr>
                    <td>租房补发</td>
                    <td>{{ scope.row.salaryFull.rentsupply }}</td>
                  </tr>
                  <tr>
                    <td>独生子女补贴</td>
                    <td>{{ scope.row.salaryFull.aloneallowance }}</td>
                  </tr>
                  <tr>
                    <td>独生子女补贴补发</td>
                    <td>{{ scope.row.salaryFull.alonesupply }}</td>
                  </tr>
                  <tr>
                    <td>回民</td>
                    <td>{{ scope.row.salaryFull.hui }}</td>
                  </tr>
                  <tr>
                    <td>烤火费</td>
                    <td>{{ scope.row.salaryFull.fire }}</td>
                  </tr>
                  <tr>
                    <td>防暑降温费</td>
                    <td>{{ scope.row.salaryFull.cool }}</td>
                  </tr>
                  <tr>
                    <td>物业补贴</td>
                    <td>{{ scope.row.salaryFull.propertyallowance }}</td>
                  </tr>
                  <tr>
                    <td>采暖补贴</td>
                    <td>{{ scope.row.salaryFull.warmallowance }}</td>
                  </tr>
                  <tr>
                    <td>采暖补贴补发</td>
                    <td>{{ scope.row.salaryFull.warmsupply }}</td>
                  </tr>
                  <tr>
                    <td>物业补贴补发</td>
                    <td>{{ scope.row.salaryFull.propertysupply }}</td>
                  </tr>
                  <tr>
                    <td>补发费用</td>
                    <td>{{ scope.row.salaryFull.supply }}</td>
                  </tr>
                  <tr>
                    <td>扣款</td>
                    <td>{{ scope.row.salaryFull.deduction }}</td>
                  </tr>
                  <tr>
                    <td>病事假</td>
                    <td>{{ scope.row.salaryFull.sickpersonalleave }}</td>
                  </tr>
                  <tr>
                    <td>应发合计</td>
                    <td>{{ scope.row.salaryFull.sum }}</td>
                  </tr>
                  <tr>
                    <td>养老金</td>
                    <td>{{ scope.row.salaryFull.pension }}</td>
                  </tr>
                  <tr>
                    <td>大额医疗</td>
                    <td>{{ scope.row.salaryFull.largemedical }}</td>
                  </tr>
                  <tr>
                    <td>职业年金</td>
                    <td>{{ scope.row.salaryFull.occupationalannuity }}</td>
                  </tr>
                  <tr>
                    <td>公积金</td>
                    <td>{{ scope.row.salaryFull.provident }}</td>
                  </tr>
                  <tr>
                    <td>补扣职业年金</td>
                    <td>{{ scope.row.salaryFull.occupationalannuitydecuction }}</td>
                  </tr>
                  <tr>
                    <td>补扣大额医疗</td>
                    <td>{{ scope.row.salaryFull.largemedicaldeduction }}</td>
                  </tr>
                  <tr>
                    <td>补缴养老金</td>
                    <td>{{ scope.row.salaryFull.pensionback }}</td>
                  </tr>
                  <tr>
                    <td>补扣保险</td>
                    <td>{{ scope.row.salaryFull.insurancededuction }}</td>
                  </tr>
                  <tr>
                    <td>扣款合计</td>
                    <td>{{ scope.row.salaryFull.sumdeduction }}</td>
                  </tr>
                  <tr>
                    <td>补缴公积金</td>
                    <td>{{ scope.row.salaryFull.providentback }}</td>
                  </tr>
                  <tr>
                    <td>补扣公积金</td>
                    <td>{{ scope.row.salaryFull.providentdeduction }}</td>
                  </tr>
                  <tr>
                    <td>会员费</td>
                    <td>{{ scope.row.salaryFull.member }}</td>
                  </tr>
                  <tr>
                    <td>扣个税</td>
                    <td>{{ scope.row.salaryFull.individual }}</td>
                  </tr>
                  <tr>
                    <td>实发合计</td>
                    <td>{{ scope.row.salaryFull.actualsum }}</td>
                  </tr>
                  <tr>
                    <td>代发合计</td>
                    <td>{{ scope.row.salaryFull.agencysum }}</td>
                  </tr>
                  <tr>
                    <td>代扣合计</td>
                    <td>{{ scope.row.salaryFull.deductionsum }}</td>
                  </tr>
                  <tr>
                    <td>还款</td>
                    <td>{{ scope.row.salaryFull.repay }}</td>
                  </tr>
                  <tr>
                    <td>实发工资</td>
                    <td>{{ scope.row.salaryFull.actualwage }}</td>
                  </tr>
                  <tr>
                    <td>补缴补充公积金</td>
                    <td>{{ scope.row.salaryFull.addprovidentback }}</td>
                  </tr>
                  <tr>
                    <td>应付工资</td>
                    <td>{{ scope.row.salaryFull.total }}</td>
                  </tr>
                  <!-- 保险 -->
                  <tr>
                    <td>缴费基数</td>
                    <td>{{ scope.row.salaryFull.base }}</td>
                  </tr>
                  <tr>
                    <td>养老金个人比率</td>
                    <td>{{ scope.row.salaryFull.pensionpersonalper }}</td>
                  </tr>
                  <tr>
                    <td>养老金公司比率</td>
                    <td>{{ scope.row.salaryFull.pensionunitper }}</td>
                  </tr>
                  <tr>
                    <td>养老金合计比率</td>
                    <td>{{ scope.row.salaryFull.pensionsumper }}</td>
                  </tr>
                  <tr>
                    <td>医疗个人比率</td>
                    <td>{{ scope.row.salaryFull.medicalpersonalper }}</td>
                  </tr>
                  <tr>
                    <td>医疗单位比率</td>
                    <td>{{ scope.row.salaryFull.medicalunitper }}</td>
                  </tr>
                  <tr>
                    <td>医疗合计比率</td>
                    <td>{{ scope.row.salaryFull.medicalsumper }}</td>
                  </tr>
                  <tr>
                    <td>失业个人比率</td>
                    <td>{{ scope.row.salaryFull.joblesspersonalper }}</td>
                  </tr>
                  <tr>
                    <td>失业单位比率</td>
                    <td>{{ scope.row.salaryFull.joblessunitper }}</td>
                  </tr>
                  <tr>
                    <td>失业合计比率</td>
                    <td>{{ scope.row.salaryFull.joblesssumper }}</td>
                  </tr>
                  <tr>
                    <td>工伤保险</td>
                    <td>{{ scope.row.salaryFull.injury }}</td>
                  </tr>
                  <tr>
                    <td>生育保险</td>
                    <td>{{ scope.row.salaryFull.birth }}</td>
                  </tr>
                  <tr>
                    <td>个人扣款合计</td>
                    <td>{{ scope.row.salaryFull.personaldeduction }}</td>
                  </tr>
                  <tr>
                    <td>大额医疗救助</td>
                    <td>{{ scope.row.salaryFull.ilargemedical }}</td>
                  </tr>
                  <tr>
                    <td>单位扣款合计</td>
                    <td>{{ scope.row.salaryFull.unitsum }}</td>
                  </tr>
                  <tr>
                    <td>月缴费金额</td>
                    <td>{{ scope.row.salaryFull.month }}</td>
                  </tr>
                  <!-- 公积金 -->
                  <tr>
                    <td>缴费基数</td>
                    <td>{{ scope.row.salaryFull.pbase }}</td>
                  </tr>
                  <tr>
                    <td>缴费比例</td>
                    <td>{{ scope.row.salaryFull.per }}</td>
                  </tr>
                  <tr>
                    <td>个人</td>
                    <td>{{ scope.row.salaryFull.personal }}</td>
                  </tr>
                  <tr>
                    <td>单位</td>
                    <td>{{ scope.row.salaryFull.unit }}</td>
                  </tr>
                  <tr>
                    <td>月缴费合计</td>
                    <td>{{ scope.row.salaryFull.pmonth }}</td>
                  </tr>
                  <tr>
                    <td>补缴</td>
                    <td>{{ scope.row.salaryFull.back }}</td>
                  </tr>
                  <tr>
                    <td>合计</td>
                    <td>{{ scope.row.salaryFull.ptotal }}</td>
                  </tr>
                  <!-- 其他 -->
                  <tr>
                    <td>奖金</td>
                    <td>{{ scope.row.salaryFull.bonus }}</td>
                  </tr>
                  <tr>
                    <td>总收入</td>
                    <td>{{ scope.row.salaryFull.allsalary }}</td>
                  </tr>
                </table>
              </div>
              <el-tag>{{ scope.row.salaryFull.name }}</el-tag>
            </el-tooltip>
            <el-tag v-else>
              暂未设置
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column
          label="操作"
          align="center"
        >
          <template slot-scope="scope">
            <el-button @click="show(scope.row)">
              查看
            </el-button>
            <el-popover
              placement="left"
              title="修改工资账套"
              @show="showPop(scope.row.salary)"
              @hide="hidePop(scope.row)"
              width="200"
              trigger="click"
            >
              <div>
                <el-select
                  v-model="currentSalary"
                  placeholder="请选择"
                  size="mini"
                >
                  <el-option
                    v-for="item in salaries"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id"
                  />
                </el-select>
              </div>
              <el-button
                slot="reference"
                type="danger"
              >
                修改工资账套
              </el-button>
            </el-popover>
          </template>
        </el-table-column>
      </el-table>
      <div style="display: flex;justify-content: flex-end">
        <el-pagination
          background
          @size-change="sizeChange"
          @current-change="currentChange"
          layout="sizes, prev, pager, next, jumper, ->, total, slot"
          :total="total"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SalSobCfg',
  data () {
    return {
      emps: [],
      total: 0,
      currentPage: 1,
      currentSize: 10,
      currentSalary: null,
      salaries: []
    }
  },
  mounted () {
    this.initEmps()
    this.initSalaries()
  },
  methods: {
    show (data) {
      console.log(data)
    },
    sizeChange (size) {
      this.currentSize = size
      this.initEmps()
    },
    currentChange (page) {
      this.currentPage = page
      this.initEmps()
    },
    hidePop (data) {
      if (this.currentSalary) {
        this.putRequest('/salary/sobcfg/?eid=' + data.id + '&sid=' + this.currentSalary).then(resp => {
          if (resp) {
            this.initEmps()
          }
        })
      }
    },
    showPop (data) {
      if (data) {
        this.currentSalary = data.id
      } else {
        this.currentSalary = null
      }
    },
    initSalaries () {
      this.getRequest('/salary/sobcfg/salaries').then(resp => {
        if (resp) {
          this.salaries = resp
        }
      })
    },
    initEmps () {
      this.getRequest('/salary/sobcfg/?page=' + this.currentPage + '&size=' + this.currentSize).then(resp => {
        if (resp) {
          this.emps = resp.data
          this.total = resp.total
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
