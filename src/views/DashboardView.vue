<template>
  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header  mdl-layout--fixed-tabs">
    <header class="mdl-layout__header">
      <div class="mdl-layout__header-row">
        <span class="mdl-layout-title">All</span>
        <div class="mdl-layout-spacer"></div>
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--expandable mdl-textfield--floating-label mdl-textfield--align-right">
          <label class="mdl-button mdl-js-button mdl-button--icon" for="fixed-header-drawer-exp">
            <i class="material-icons">search</i>
          </label>
          <div class="mdl-textfield__expandable-holder">
            <input class="mdl-textfield__input" type="text" name="sample" id="fixed-header-drawer-exp">
          </div>
        </div>
      </div>
    </header>
    <div class="mdl-layout__drawer">
      <span class="mdl-layout-title">All Articles</span>
      <nav class="mdl-navigation">
        <a class="mdl-navigation__link" href="">Link</a>
        <a class="mdl-navigation__link" href="">Link</a>
      </nav>
    </div>
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
