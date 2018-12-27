<template>
  <div class="ratingselect">
    <div class="rating-type border-1px">
      <span class="block" :class="{active:ratingsType ===2}" @click="clickRatingsType(2)">
        全部<span class="count">{{totalRatingsCount}}</span>
      </span>
      <span class="block" :class="{active:ratingsType ===0}" @click="clickRatingsType(0)">
        推荐<span class="count">{{totalRecommendCount}}</span>
      </span>
      <span class="block" :class="{active:ratingsType ===1}" @click="clickRatingsType(1)">
        吐槽<span class="count">{{totalNegativeCount}}</span>
      </span>
    </div>
    <div class="switch " :class="{on:onlyText}" @click="clickTextType">
      <span class="iconfont icon-check_circle" ></span>
      <span class="text">只看有内容的评价</span>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
    props: {
      ratingsType: Number,
      onlyText: Boolean
    },
    methods: {
      clickRatingsType (ratingsType) {
        this.$emit('updateRatingsType', ratingsType)
      },
      clickTextType () {
        this.$emit('updateOnlyText')
      }
    },
    computed: {
      ...mapGetters(['totalRatingsCount','totalRecommendCount','totalNegativeCount'])
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"

  .ratingselect
    .rating-type
      padding: 18px 0
      margin: 0 18px
      border-1px(rgba(7, 17, 27, 0.1))
      font-size: 0
      .block
        display: inline-block
        padding: 8px 12px
        margin-right: 8px
        line-height: 16px
        border-radius: 1px
        font-size: 12px
        color: rgb(77, 85, 93)
        background: rgba(77, 85, 93, 0.2)
        &.active
          background: #02a774
          color: #fff
        .count
          margin-left: 2px
          font-size: 8px
    .switch
      padding: 12px 18px
      line-height: 24px
      border-bottom: 1px solid rgba(7, 17, 27, 0.1)
      color: rgb(147, 153, 159)
      font-size: 0
      &.on
        .icon-check_circle
          color: #02a774
      .icon-check_circle
        display: inline-block
        vertical-align: top
        margin-right: 4px
        font-size: 24px
      .text
        display: inline-block
        vertical-align: top
        font-size: 12px
</style>

