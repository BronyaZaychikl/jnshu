<template>
<!-- 文章详情下方留言 -->
  <div class="articleMessage">
      <div v-for="per in person" :key="per.id" class="personList">
        <div class="personAll">
          <div class="peronName">
            <img :src="per.img" alt />
            <p>{{per.name}}</p>
            <p>时间{{per.time}}</p>
          </div>
          <div class="good">
            <img src="../assets/images/文章/u565.svg" alt />
            <p>{{per.good}}</p>
          </div>
        </div>
        <p
          class="perCom"
          :class="{'perComment':per.word}"
          @click="per.word=!per.word"
        >{{per.personalComment}}</p>
        <span class="del">删除</span>
      </div>

  </div>
</template>

<script>
export default {
name:"articleMessage",
data () {
    return {
              person: [
        {
          id: 1,
          img: "",
          name: "李白",
          value: 3,
          time: "2019-9-9",
          good: 123,
          word: true,
          del: false,
          personalComment:
            "真的是非常感谢无偿提供课源的老师!对于我这种自学的人来说真的是帮助太大了!对于快要高考但是数学还是几十分的一位同学，我强烈给她的的安利"
        },
        {
          id: 2,
          img: "",
          name: "李白",
          value: 4,
          time: "2019-9-9",
          good: 120,
          word: true,
          del: false,
          personalComment:
            "真的是非常感谢无偿提供课源的老师!对于我这种自学的人来说真的是帮助太大了!对于快要高考但是数学还是几十分的一位同学，我强烈给她的的安利"
        }
      ]

    }
}
}
</script>

<style lang="scss" scoped>
.articleMessage{
    .personList {
      border-bottom: 1px solid #d7d7d7;
      position: relative;
      padding: 0 15px 15px;
      .personAll {
        display: flex;
        justify-content: space-between;
        font-size: 10px;
        .peronName {
          display: flex;
          align-items: center;
          .el-rate {
            height: 17.6px;
          }
          img {
            width: 23px;
            height: 23px;
            border: 1px solid #000;
            border-radius: 50%;
          }
          p {
            margin: 0 5px;
          }
        }
        .good {
          display: flex;
          align-items: center;
          padding-right: 5px;
        }
      }
      .perCom {
        font-size: 12px;
      }
      .perComment {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
      }
      .del {
        position: absolute;
        font-size: 12px;
        bottom: 0;
        right: 20px;
      }
    }

}

</style>