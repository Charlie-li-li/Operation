<template>
  <div class="dashboard-container">
    <div class="dashboard-text">
      <div class="search-box">
        <div class="search-title">全文检索</div>
        <div class="search">
          <el-input
            size="small"
            placeholder="请输入内容"
            prefix-icon="el-icon-search"
            v-model="input2"
          >
          </el-input>
        </div>
        <div class="search-button">
          <el-button type="primary">查询</el-button>
          <el-button type="primary">展开检索</el-button>
        </div>
        <div class="colum-button">
          <el-button type="primary">展开检索</el-button>
        </div>
      </div>
      <div class="condition">
        <el-row :gutter="20">
          <el-col :span="3">
            <el-select
              v-model="value"
              placeholder="无"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="3">
            <el-input
              v-model="input"
              placeholder="请输入关键字"
            ></el-input>
          </el-col>
          <el-col :span="3">
            <el-select
              v-model="value"
              placeholder="编号"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="3">
            <el-input
              v-model="input"
              placeholder="请输入关键字"
            ></el-input>
          </el-col>
          <el-col :span="3">
            <el-select
              v-model="value"
              placeholder="编号"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="3">
            <el-input
              v-model="input"
              placeholder="请输入关键字"
            ></el-input>
          </el-col>
          <el-col :span="3">
            <el-select
              v-model="value"
              placeholder="编号"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="3">
            <el-input
              v-model="input"
              placeholder="请输入关键字"
            ></el-input>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="3">
            <el-select
              v-model="value"
              placeholder="无"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="3">
            <el-input
              v-model="input"
              placeholder="请输入关键字"
            ></el-input>
          </el-col>
          <el-col :span="3">
            <el-select
              v-model="value"
              placeholder="编号"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="3">
            <el-input
              v-model="input"
              placeholder="请输入关键字"
            ></el-input>
          </el-col>
          <el-col :span="3">
            <el-select
              v-model="value"
              placeholder="编号"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="3">
            <el-input
              v-model="input"
              placeholder="请输入关键字"
            ></el-input>
          </el-col>
          <el-col :span="3">
            <el-select
              v-model="value"
              placeholder="编号"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="3">
            <el-input
              v-model="input"
              placeholder="请输入关键字"
            ></el-input>
          </el-col>
        </el-row>
        <div class="btn-box">
              <el-button type="primary">查询</el-button>
              <el-button type="success">重置</el-button>
        </div>
      </div>
      <div>
        <el-table
          :data="tableData"
          border
          style="width: 100%"
        >
          <el-table-column
            fixed
            prop="c1"
            label="column1"
          >
          </el-table-column>
          <el-table-column
            prop="c2"
            label="2"
          >
          </el-table-column>
          <el-table-column
            prop="c3"
            label="3"
          >
          </el-table-column>
          <el-table-column
            prop="c4"
            label="4"
          >
          </el-table-column>
          <el-table-column
            prop="c5"
            label="5"
          >
          </el-table-column>
          <el-table-column
            prop="c6"
            label="6"
          >
          </el-table-column>
          <el-table-column
            prop="c7"
            label="7"
          >
          </el-table-column>
          <el-table-column
            prop="c8"
            label="8"
          >
          </el-table-column>
          <el-table-column
            prop="c9"
            label="9"
          >
          </el-table-column>
          <el-table-column
            prop="c10"
            label="10"
          >
          </el-table-column>
          <el-table-column
            prop="c11"
            label="11"
          >
          </el-table-column>
   
          <el-table-column
            label="操作"
            width="100"
          >
            <template slot-scope="scope">
              <el-button
                @click="handleClick(scope.row)"
                type="primary"
                size="small"
                icon="el-icon-document"
              >详情</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>

      <div class="pager">
        <el-pagination
          background
          layout="prev, pager, next,jumper"
          :total="1000"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Dashboard",
  created() {},
  data() {
    return {
      tableData: [
        {
          c1: "2016-05-03",
          c2: "王小虎",
          c3: "上海",
          c4: "普陀区",
          c5: "上海市普陀区金沙江路 1518 弄",
          c6: 200333,
          c7: 200333,
          c8: 200333,
          c9: 200333,
          c10: 200333,
          c11: 200333
        },
        {
          c1: "2016-05-03",
          c2: "王小虎",
          c3: "上海",
          c4: "普陀区",
          c5: "上海市普陀区金沙江路 1518 弄",
          c6: 200333,
          c7: 200333,
          c8: 200333,
          c9: 200333,
          c10: 200333,
          c11: 200333
        },    {
          c1: "2016-05-03",
          c2: "王小虎",
          c3: "上海",
          c4: "普陀区",
          c5: "上海市普陀区金沙江路 1518 弄",
          c6: 200333,
          c7: 200333,
          c8: 200333,
          c9: 200333,
          c10: 200333,
          c11: 200333
        },    {
          c1: "2016-05-03",
          c2: "王小虎",
          c3: "上海",
          c4: "普陀区",
          c5: "上海市普陀区金沙江路 1518 弄",
          c6: 200333,
          c7: 200333,
          c8: 200333,
          c9: 200333,
          c10: 200333,
          c11: 200333
        },    {
          c1: "2016-05-03",
          c2: "王小虎",
          c3: "上海",
          c4: "普陀区",
          c5: "上海市普陀区金沙江路 1518 弄",
          c6: 200333,
          c7: 200333,
          c8: 200333,
          c9: 200333,
          c10: 200333,
          c11: 200333
        },    {
          c1: "2016-05-03",
          c2: "王小虎",
          c3: "上海",
          c4: "普陀区",
          c5: "上海市普陀区金沙江路 1518 弄",
          c6: 200333,
          c7: 200333,
          c8: 200333,
          c9: 200333,
          c10: 200333,
          c11: 200333
        },    {
          c1: "2016-05-03",
          c2: "王小虎",
          c3: "上海",
          c4: "普陀区",
          c5: "上海市普陀区金沙江路 1518 弄",
          c6: 200333,
          c7: 200333,
          c8: 200333,
          c9: 200333,
          c10: 200333,
          c11: 200333
        },    {
          c1: "2016-05-03",
          c2: "王小虎",
          c3: "上海",
          c4: "普陀区",
          c5: "上海市普陀区金沙江路 1518 弄",
          c6: 200333,
          c7: 200333,
          c8: 200333,
          c9: 200333,
          c10: 200333,
          c11: 200333
        },    {
          c1: "2016-05-03",
          c2: "王小虎",
          c3: "上海",
          c4: "普陀区",
          c5: "上海市普陀区金沙江路 1518 弄",
          c6: 200333,
          c7: 200333,
          c8: 200333,
          c9: 200333,
          c10: 200333,
          c11: 200333
        }
      ],
      columnWidth: 0
    };
  },
  computed: {
    ...mapGetters(["name"])
  }
};
</script>

<style lang="scss" scoped>
.condition {
  margin: 20px 10px;
  .el-row:first-child {
    margin-bottom: 20px;
  }
}

.search-title {
  margin-right: 10px;
}
.pager {
  width: 511px;
  margin: 50px auto 20px auto;
}
</style>
