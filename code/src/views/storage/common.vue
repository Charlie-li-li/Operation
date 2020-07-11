<template>
  <div class="dashboard-container">
    <div class="dashboard-text">
      <div class="search-box">
        <div class="search-title">全文检索</div>
        <div class="search">
          <el-input
            size="small"
            placeholder="请输入关键字"
            prefix-icon="el-icon-search"
            v-model="input2"
          >
          </el-input>
        </div>
        <div class="search-button">
          <el-button type="primary">查询</el-button>
          <el-button
            type="primary"
            @click="showHideSearch(isShow)"
          >{{!isShow?"展开检索":"收起检索"}}</el-button>
        </div>
        <div class="colum-button">
          <el-button type="primary">定制列</el-button>
        </div>
      </div>
      <div
        class="condition"
        v-if="isShow"
      >
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
            label="column1"
          >
          </el-table-column>
          <el-table-column
            prop="c3"
            label="column1"
          >
          </el-table-column>
          <el-table-column
            prop="c4"
            label="column1"
          >
          </el-table-column>
          <el-table-column
            prop="c5"
            label="column1"
          >
          </el-table-column>
          <el-table-column
            prop="c6"
            label="column1"
          >
          </el-table-column>
          <el-table-column
            prop="c7"
            label="column1"
          >
          </el-table-column>
          <el-table-column
            prop="c8"
            label="column1"
          >
          </el-table-column>
          <el-table-column
            prop="c9"
            label="column1"
          >
          </el-table-column>
          <el-table-column
            prop="c10"
            label="column1"
          >
          </el-table-column>
          <el-table-column
            prop="c11"
            label="column1"
          >
          </el-table-column>

          <el-table-column
            label="操作"
            width="100"
          >
            <template slot-scope="scope">
              <el-button
                @click.native.prevent="handleClick(scope.row)"
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

    <el-dialog
      title="资产设备详情"
      :visible.sync="showDialog"
      width="30%"
      center
    >
      <div class="dialog-box">
        <div class="item">
          <div>123</div>
          <div>456</div>
        </div>

        <div class="item">
          <div>789</div>
          <div>012</div>
        </div>

         <div class="item">
          <div>789</div>
          <div>012</div>
        </div>

         <div class="item">
          <div>789</div>
          <div>012</div>
        </div>

         <div class="item">
          <div>789</div>
          <div>012</div>
        </div>

         <div class="item">
          <div>789</div>
          <div>012</div>
        </div>
        
         <div class="item">
          <div>789</div>
          <div>012</div>
        </div>

         <div class="item">
          <div>789</div>
          <div>012</div>
        </div>

         <div class="item">
          <div>789</div>
          <div>012</div>
        </div>

         <div class="item">
          <div>789</div>
          <div>012</div>
        </div>

         <div class="item">
          <div>789</div>
          <div>012</div>
        </div>

         <div class="item">
          <div>789</div>
          <div>012</div>
        </div>

         <div class="item">
          <div>789</div>
          <div>012</div>
        </div>

         <div class="item">
          <div>789</div>
          <div>012</div>
        </div>

         <div class="item">
          <div>789</div>
          <div>012</div>
        </div>

         <div class="item">
          <div>789</div>
          <div>012</div>
        </div>

         <div class="item">
          <div>789</div>
          <div>012</div>
        </div>

         <div class="item">
          <div>789</div>
          <div>012</div>
        </div>

         <div class="item">
          <div>789</div>
          <div>012</div>
        </div>

         <div class="item">
          <div>789</div>
          <div>012</div>
        </div>

      </div>
      <span
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button
          type="primary"
          @click="centerDialogVisible = false"
        >确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Wuliji",
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
        }
      ],
      columnWidth: 0,
      isShow: false,
      showDialog: false,
      value1:'',
      value2:''
    };
  },
  methods: {
    handleClick(row) {
      this.showDialog = true;
    },
    showHideSearch(isShow) {
      this.isShow = !isShow;
    },
    reset(){
      this.value1="";
      this.value2="";
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
