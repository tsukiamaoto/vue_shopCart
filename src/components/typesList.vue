<script>
import { mapActions } from 'vuex'
export default {
  props: {
    types: Array,
  },
  methods: {
    ...mapActions('product', [
      'getProducts',
      'reset'
    ]),
    isExistedChild(parent, childs) {
      let isExisted = false
      childs.forEach(child => {
        if (child.parent.id == parent.id) {
          isExisted = true
        }
      })
      return isExisted
    },
    queryBookType(bookType) {
      const params = Object.fromEntries(new URLSearchParams(location.search)) 
      const query = {
        ...params,
        column: 'types', 
        search_query: bookType,
      }

      this.reset()
      this.getProducts(query)
      this.changeUrlWithQuery(query)
    },
    changeUrlWithQuery(query = {}) {
      this.$router.replace({ name: 'Home', query: {
        ...query,
      }})
    }
  },
}
</script>
<template>
<div class="menu">
  <ul class="list-group">
    <li class="list-group-item dropend"
      v-for="(type_0, index_0) in types[0]" :key="index_0">
      <button class="btn dropbtn" type="button" 
      :id="'MainTypeMenuButton_' + index_0" data-bs-toggle="dropdown" aria-expanded="false"
      v-on:click="queryBookType(type_0.name)">
        {{type_0.name}}
        <span v-show="isExistedChild(type_0, types[1])">&raquo;</span>
      </button>

      <ul class="dropdown-content dropdown-menu"     
        :aria-labelledby="'MainTypeMenuButton_' + index_0"
        v-show="isExistedChild(type_0, types[1])">
        <li v-for="(type_1, index_1) in types[1]" :key="index_1"
          v-show="type_0.id == type_1.parent.id">
          <a class="dropdown-item"
            v-on:click="queryBookType(type_1.name)">
            {{type_1.name}} 
            <span v-show="isExistedChild(type_1, types[2])">&raquo;</span>
          </a>

          <ul class="dropdown-menu dropdown-submenu"
            v-show="isExistedChild(type_1, types[2])">
            <li v-for="(type_2, index_2) in types[2]" :key="index_2"
                v-show="(type_2.parent != null) && (type_1.id == type_2.parent.id)">
              <a class="dropdown-item"
                v-on:click="queryBookType(type_2.name)">
                {{type_2.name}}
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
</div>
</template>

<style scoped>
.menu:hover .dropdown-content {
  display: block;
  position: absolute;
  left: 100%;
  top: -4px;
}

.dropdown-menu li {
position: relative;
}
.dropdown-menu .dropdown-submenu {
display: none;
position: absolute;
left: 100%;
top: -7px;
}
.dropdown-menu .dropdown-submenu-left {
right: 100%;
left: auto;
}
.dropdown-menu > li:hover > .dropdown-submenu {
display: block;
}

.dropdown-hover:hover>.dropdown-menu {
display: inline-block;
}

.dropdown-hover>.dropdown-toggle:active {
/*Without this, clicking will make it sticky*/
pointer-events: none;
}

</style>
