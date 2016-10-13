<template>
  <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header  mdl-layout--fixed-tabs">
    <header class="mdl-layout__header">
      <button class="mdl-layout-icon mdl-button mdl-js-button mdl-button--icon" @click="previousPage">
        <i class="material-icons">arrow_back</i>
      </button>
      <div class="mdl-layout__header-row">
        <span class="mdl-layout-title">Subscribe</span>
        <div class="mdl-layout-spacer"></div>
      </div>
    </header>
    <main class="mdl-layout__content">
      <!-- List with avatar and controls -->
      <ul class="demo-list-control mdl-list">
        <li class="mdl-list__item">
          <span class="mdl-list__item-primary-content">
            <i class="material-icons  mdl-list__item-avatar">person</i>
            Bryan Cranston
          </span>
          <span class="mdl-list__item-secondary-action">
            <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="list-checkbox-1">
              <input type="checkbox" id="list-checkbox-1" class="mdl-checkbox__input" />
            </label>
          </span>
        </li>
        <li class="mdl-list__item">
          <span class="mdl-list__item-primary-content">
            <i class="material-icons  mdl-list__item-avatar">person</i>
            Aaron Paul
          </span>
          <span class="mdl-list__item-secondary-action">
            <label class="demo-list-radio mdl-radio mdl-js-radio mdl-js-ripple-effect" for="list-option-1">
              <input type="radio" id="list-option-1" class="mdl-radio__button" name="options" value="1" checked />
            </label>
          </span>
        </li>
        <li class="mdl-list__item">
          <span class="mdl-list__item-primary-content">
            <i class="material-icons  mdl-list__item-avatar">person</i>
            Bob Odenkirk
          </span>
          <span class="mdl-list__item-secondary-action">
            <label class="mdl-switch mdl-js-switch mdl-js-ripple-effect" for="list-switch-1">
              <input type="checkbox" id="list-switch-1" class="mdl-switch__input" checked />
            </label>
          </span>
        </li>
      </ul>
    </main>
  </div>
</template>
<script>
export default {
  mounted(){
    componentHandler.upgradeElements(this.$el)
  },
  methods: {
    previousPage() {
      return this.$router.go(-1);
    }
  }
}
</script>
