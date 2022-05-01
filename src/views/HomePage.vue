<template>
  <div class="home-page">
    <div class="home-search-block">
      <div class="home-search">
        <div class="header-home">
            <div class="left-block">
                <h1>Agri Bank CI</h1>
                <p>Votre Bank Agricole</p>
            </div>
            <div class="ci-image">
                <img width="150px" src="../assets/images/farm.jpg" alt="">
            </div>
          
        </div>
        <p class="info-searchh">Vous Recherchez un element en particulier ?</p>
        <form action="" @submit.prevent="SearchForm">
          <div class="group-search">
            <input
              type="text"
              class="search_input"
              placeholder="SAISISSEZ UN MOT"
              required
              v-model="searchInput"
            />
          </div>
          <div class="group-btn">
            <button class="search_btn">Demarrer</button>
          </div>
        </form>
      </div>
    </div>
    <transition name="agrihome">
    <div class="message-text" v-show="showGoto">
        <router-link :to="{name:'article-page'}"> 
        Clickez ici pour acceder a la liste des produits de Agri Bank
        </router-link>
    </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
        searchInput:'',
        showGoto:false,
    };
  },
  methods:{
      SearchForm(){
          console.log("Form data is submit", this.searchInput)
      }
  },
  created() {
            setTimeout(() => this.showGoto = true, 3000)
        }
};
</script>

<style lang="scss">
.home-page {
  background: #fafafa;
  width: 100%;
  min-height: 100vh;

  .home-search-block {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }

  .home-search {
    width: 500px;
    background: #fff;
    padding: 20px;
    box-shadow: 2px 2px 10px #8d8a8a;
    border-radius: 10px;

    .header-home {
      padding-bottom: 10px;
      border-bottom: 1px solid #ccc;
      display: flex;
      align-items: center;
    justify-content: space-between;
    
    p{
        margin-bottom: 0;
    }
      h1 {
        font-size: 26px;
        font-weight: bold;
      }

      img{
          border-radius: 10px;
          object-fit: cover;
      }
    }

    p.info-searchh {
      margin: 20px 0;
      padding: 10px 0;
      background: #f2a300;
      text-align: center;
      border-radius: 5px;
    }

    .group-search {
      margin-bottom: 1.5rem;
    margin-top: 2rem;

      input.search_input {
        width: 100%;
        border-radius: 5px;
        border: 1px solid #ccc;
            padding: 10px;
        outline: none;
        color: #4e4d4d;
      }
    }
  }

  .group-btn {
    text-align: center;
    button.search_btn {
      width: 75%;
      border-radius: 5px;
      background: #000;
      color: #fff;
      font-weight: bold;
      padding: 10px;
      transition: 0.5s;

      &:hover{
          background: #f2a300;
          color: #000;
          transition: 0.5s;
          border: 2px solid;

      }
    }
  }

  .message-text {
    right: 10px;
    top: 20px;
    position: absolute;
    background: #ccc;
    padding: 20px;
    border-radius: 18px 18px 0 18px;
        box-shadow: 5px 5px 5px #565353;
        transition: 0.5s;

        &:hover{
            font-weight: bold;
            cursor: pointer;
        }

        a{
            margin: 0;
            padding: 10px;
                color: #333;
        text-decoration: none;
        }
}
}
.agrihome-enter-active {
  transition: all .3s ease;
}
.agrihome-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.agrihome-enter, .agrihome-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>