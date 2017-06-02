<template>
  <div class="row work-history">
    <div class="job-history-block col-md-4">
        <div class="title">
          <h2>Title</h2>
          <h3>Position</h3>
        </div>
        <div class="description">
          <p>Description</p>
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "WorkHistory",
    data() {
      return {
        history: []
      }
    },
    mounted() {
      // this.history = workHistoryService.getJobHistory()
      this.history = [{
        company: "Binary Mango",
        position: "Senior Software Developer",
        time: "2016 - continue",
        description: `
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`
      }, {
        company: "Active Mill",
        position: "Full Stack Developer",
        time: "2015 - 2016",
        description: `
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`
      }, {
        company: "Social Doors",
        position: "Full Stack Developer",
        time: "2015",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`
      }, {
        company: "Equilibtio Agencia Digital",
        position: "Junior Software Developer",
        time: "2013 - 2015",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`
      }]
    }
  }

</script>

<style scoped>
  .work-history {
    font-family: Streamster;
    min-height: 800px;
    align-items: center;
    padding-left: 15px;
  }

  .job-history-block {
    margin-bottom: 15px;
  }

  .title h2,
  .title h3 {
    width: 100%;
    margin-bottom: 0;
    margin-top: 0;
  }

  .title {
    position: relative;
    flex-wrap: wrap;
    width: 100%;
    height: 100px;
    color: #FFFFFF;
    background-color: #FF008B;
    display: flex;
    align-items: center;
    line-height: 100px;
    padding-left: 15px;
  }

  .description {
    font-family: AlienEncounters;
    padding: 15px;
    border: 1px solid #fff;
    margin-top: 10px;
    font-size: 20px;
    color: #fff;
  }

</style>
