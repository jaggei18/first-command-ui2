<template>
  <q-page>
      <div class="row justify-around">
        <div class="col-sm-4 col-lg-4 mt-3">
          <div class="mainTitleBg">Policy Inquiry</div>
          <div class="mainBoxBg policyBoxRadius">
            <div class="row"></div>
            <p>Key in a new Policy Number</p>
            <form class="row g-3 formBorderBottom padding-btm">
              <div class="col-4">
                <label>Policy Number</label>
              </div>
              <div class="col-5 padding-space">
                <q-input outlined v-model="text" class="form-control" dense />
              </div>
              <div class="col-2 padding-space">
                <q-btn color="primary" label="Submit" type="submit" class="btn btn-primary btn-sm mb-3 mt-1" />
              </div>
            </form>
            <div class="pt-3 mt-3">
            <p>View a Pending Policy Number</p>
            <form class="row g-3 padding-btm">
                <div class="col-4">
                  <label>Agent Number</label>
                </div>
                <div class="col-5 padding-space">
                  <q-input outlined v-model="text" class="form-control" dense />
                </div>
                <div class="col-2 padding-space">
                  <q-btn color="primary" @click="getAgentInfo()" label="Submit" type="button" class="btn btn-primary btn-sm mb-3 mt-1" />
                </div>
              </form>
            </div>
          </div>
          <div class="mainFooterBg">
            To submit questions or information on existing or pending policies.
          </div>
        </div>
        <div class="col-sm-7 col-lg-8 mt-3">
          <div class="message-bar" v-if="false">
            <div class="mainTitleBg text-start">Messages</div>
            <div class="mainBoxBg mainBoxRightBg">
              <p>Government Allotment cycle last run on : 9/8/2022</p>
            </div>
          </div>
          <div class="agent-bar">
            <div class="title">Pending Policy Register</div>
            <div class="mainTitleBg text-start">Register Agent for Agent Number 6457</div>
            <div class="mainBoxBg mainBoxRightBg">
              <div class="row">
                <div class="col-sm-4 col-lg-4 mt-3 in-bar">
                  <div class="mainTitleBg text-center">PENDING POLICY NUMBER</div>
                  <div class="mainBoxBg mainBoxRightBg">
                    <p><a href="#">G12122321</a></p>
                  </div>
                </div>
                <div class="col-sm-4 col-lg-4 mt-3 in-bar">
                  <div class="mainTitleBg text-center">INSURED'S NAME</div>
                  <div class="mainBoxBg mainBoxRightBg">
                    <p>BRIDGETTE H RUETERS</p>
                  </div>
                </div>
                <div class="col-sm-4 col-lg-4 mt-3 in-bar">
                  <div class="mainTitleBg text-center">DATE PENDING</div>
                  <div class="mainBoxBg mainBoxRightBg">
                    <p class="text-center">9/8/2022</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    <!-- </q-page> -->
  </q-page>
</template>

<script lang="ts">
import UserServices from '../api/services/UserServices.js'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage',
  components: {},
  setup () {
    return {
      output: ''
    }
  },
  methods: {
    getAgentInfo () {
      const data = { AgentNumber: 8987987 }
      UserServices.getAgentInfo(data).then((response) => {
        const user = JSON.parse(JSON.stringify(response?.data))
        this.output = user.ID_User
      })
        .catch(e => {
          console.log(e)
        })
    }
  }
})
</script>
