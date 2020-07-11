<template>
  <div class="dashboard-container alert">
    <div class="dashboard-text">
      <el-carousel
        :interval="5000"
        arrow="never"
      
      >
        <el-carousel-item
          v-for="item in 4"
          :key="item"
        >
          <div class="box">
            <div class="item-warp" >
              <div class="item">
                <div class="cirle" style="background:#c63a2d">
                  <img src="../../assets/4_03.png" />
                  <div class="samll-cirle" style="background:#c63a2d">{{value1}}</div>
                </div>
                <span class="desc">应用系统A</span>
              </div>
              <div class="item">
                <div class="cirle" style="background:#eea22a">
                  <img src="../../assets/4_03.png" />
                  <div class="samll-cirle" style="background:#eea22a">{{value2}}</div>
                </div>
                <span class="desc">应用系统B</span>
              </div>
              <div class="item">
                <div class="cirle" style="background:#20b4b1">
                  <img src="../../assets/4_03.png" />
                </div>
                <span class="desc">应用系统B</span>
              </div>
              <div class="item">
                <div class="cirle" style="background:#c63a2d">
                  <img src="../../assets/4_03.png" />
                  <div class="samll-cirle" style="background:#c63a2d">{{value1}}</div>
                </div>
                <span class="desc">应用系统B</span>
              </div>
              <div class="item">
                <div class="cirle" style="background:#f46a00">
                  <img src="../../assets/4_03.png" />
                  <div class="samll-cirle" style="background:#f46a00">{{value2}}</div>
                </div>
                <span class="desc">应用系统B</span>
              </div>
              <div class="item">
                <div class="cirle" style="background:#c63a2d">
                  <img src="../../assets/4_03.png" />
                  <div class="samll-cirle" style="background:#c63a2d">{{value1}}</div>
                </div>
                <span class="desc">应用系统B</span>
              </div>
              <div class="item">
                <div class="cirle" style="background:#f46a00">
                  <img src="../../assets/4_03.png" />
                  <div class="samll-cirle"  style="background:#f46a00">{{value2}}</div>
                </div>
                <span class="desc">应用系统B</span>
              </div>
              
            </div>

          </div>
        </el-carousel-item>
      </el-carousel>

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
import "../../styles/workbench.scss";
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
        },{
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
        },{
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
       value1:2,
       value2:3,
    
    };
  },
  methods: {
    handleClick(row) {
      this.showDialog = true;
    },
    showHideSearch(isShow) {
      this.isShow = !isShow;
    },
    reset() {
      this.value1 = "";
      this.value2 = "";
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
