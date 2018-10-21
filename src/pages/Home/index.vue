<template>
    <div class="page_home">
        <div class="home_header">
            <el-row :gutter="20">
                <el-col :span="12">
                    <div>名称：</div>
                    <el-input size='small' placeholder="请输入内容"></el-input>
                </el-col>
                <el-col :span="12">
                    <div>属性：</div>
                    <el-input size='small' placeholder="请输入内容"></el-input>
                </el-col>
                <el-col :span="12">
                    <div>属性：</div>
                    <el-input size='small' placeholder="请输入内容"></el-input>
                </el-col>
                <el-col :span="12">
                    <div>属性：</div>
                    <el-input size='small' placeholder="请输入内容"></el-input>
                </el-col>
            </el-row>
        </div>
        <ul class="home_list">
            <li v-for='(item,index) of list' :key='index'>{{item.title}}</li>
        </ul>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return {
            list:[]
        }
    },
    mounted(){
        axios.post('/API').then(res=>{
            console.log(res)
            this.list = res.data.articles
        })
    }
    
}
</script>
<style scoped lang='less'>
.el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
      margin-bottom: 20px;
    border-radius: 4px;
    display: flex;
    div{
        width: 50px;
        display: flex;
        justify-content: center;
        align-items:center;
    }
    .el-input{
        flex:1
    }
  }
  .home_list{
      padding: 10px;
  }
</style>
