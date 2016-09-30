<template>
  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header  mdl-layout--fixed-tabs">
    <navbar></navbar>
    <main class="mdl-layout__content">
    </main>
  </div>
</template>
<script>
import InfiniteLoading from 'vue-infinite-loading';
import moment from 'moment-timezone';
</script>
<style lang="scss">
.subscribebtn-container {
  position:fixed;
  bottom:25px;
  right:15px;
}

.mdl-dialog-container {
  .mdl-dialog {
    max-width: 310px;
  }
}

.page-content {
  padding-top:10px;
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  .article-list {
    position:absolute;
    margin: 20px 0;
    width: 100%;
    transition: all .5s cubic-bezier(.55,0,.1,1);
    ul {
      list-style-type: none;
      padding: 0;
      margin: 0;
      .news-item {
        background-color: #fff;
        padding: 20px;
        border-bottom:1px solid #eee;
        position:relative;
        line-height: 25px;
        .title {
          font-size: 1em;
          font-weight:700;
          line-height: 20px;
        }
        .meta {
          line-height: 25px;
          margin-top:5px;
          img {
            margin-right: 5px;
          }
          .author {
            margin-left: 5px;
            font-weight: 100;
            font-size: 0.95em;
          }
          .timeago {
            font-weight: 100;
            font-size: 0.95em;
          }
        }
      }
    }
  }
}
</style>
