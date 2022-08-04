<template>
  <div class="">
    <draggable class="row">
      <b-col cols="4">
        <b-card class="mb-4" title="Intents - JSON">
          <div class="border">
            <b-button v-b-toggle.collapseAccordion1 variant="link"
              >Name</b-button
            >
            <b-collapse id="collapseAccordion1" accordion="my-accordion">
              <div class="p-4">
                1. Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. 3 wolf moon officia aute,
                non cupidatat skateboard dolor brunch. Food truck quinoa
                nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                put a bird on it squid single-origin coffee nulla assumenda
                shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                wes anderson cred nesciunt sapiente ea proident. Ad vegan
                excepteur butcher vice lomo. Leggings occaecat craft beer
                farm-to-table, raw denim aesthetic synth nesciunt you probably
                haven't heard of them accusamus labore sustainable VHS.
              </div>
            </b-collapse>
          </div>
          <div class="border">
            <b-button v-b-toggle.collapseAccordion2 variant="link"
              >Gambling Location</b-button
            >
            <b-collapse id="collapseAccordion2" accordion="my-accordion">
              <div class="p-4">
                2. Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. 3 wolf moon officia aute,
                non cupidatat skateboard dolor brunch. Food truck quinoa
                nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                put a bird on it squid single-origin coffee nulla assumenda
                shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                wes anderson cred nesciunt sapiente ea proident. Ad vegan
                excepteur butcher vice lomo. Leggings occaecat craft beer
                farm-to-table, raw denim aesthetic synth nesciunt you probably
                haven't heard of them accusamus labore sustainable VHS.
              </div>
            </b-collapse>
          </div>
          <div class="border">
            <b-button v-b-toggle.collapseAccordion3 variant="link"
              >Bot Emotion</b-button
            >
            <b-collapse id="collapseAccordion3" accordion="my-accordion">
              <div class="p-4">
                3. Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. 3 wolf moon officia aute,
                non cupidatat skateboard dolor brunch. Food truck quinoa
                nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                put a bird on it squid single-origin coffee nulla assumenda
                shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                wes anderson cred nesciunt sapiente ea proident. Ad vegan
                excepteur butcher vice lomo. Leggings occaecat craft beer
                farm-to-table, raw denim aesthetic synth nesciunt you probably
                haven't heard of them accusamus labore sustainable VHS.
              </div>
            </b-collapse>
          </div>
        </b-card>
      </b-col>
      <!-- <b-col cols="3">
        <b-card>
          <vue-perfect-scrollbar
            class="scroll"
            :settings="{ suppressScrollX: true, wheelPropagation: false }"
            ref="chat-area"
          >
            <div class="chat-area">
              <div class="message">
                <b-card>
                  <h5>Complai Bot</h5>
                  <p>Hey there ! welcome to you complai chat</p>
                  <p>2:33PM</p>
                </b-card>
              </div>

              <div class="message">
                <b-card>
                  <h5>Complai Bot</h5>
                  <p>Hey there ! welcome to you complai chat</p>
                  <p>2:33PM</p>
                </b-card>
              </div>

              <div class="message">
                <b-card>
                  <h5>Complai Bot</h5>
                  <p>Hey there ! welcome to you complai chat</p>
                  <p>2:33PM</p>
                </b-card>
              </div>

              <div class="message">
                <b-card>
                  <h5>Complai Bot</h5>
                  <p>Hey there ! welcome to you complai chat</p>
                  <p>2:33PM</p>
                </b-card>
              </div>
            </div>
          </vue-perfect-scrollbar>
          <b-input-group class="mt-3">
            <b-form-input
              type="text"
              placeholder="Type you question here...!"
            ></b-form-input>
            <b-input-group-append>
              <b-button variant="info" squared>Send</b-button>
            </b-input-group-append>
          </b-input-group>
        </b-card>
      </b-col> -->

      <!-- <b-col cols="3">
        <b-card>
          <div class="information">
            <h5>SoftMax : {{ this.softMax }}</h5>
            <h5>PredictedTag : {{ this.predictedTag }}</h5>
            <h5>TextMatch : {{ this.textMatch }}</h5>
            <h5>Api : {{ this.api == null ? "Null" : "Not Null" }}</h5>
          </div>
        </b-card>
      </b-col> -->

      <b-col cols="8">
        <b-card class="pt-3" no-body>
          <b-tabs align="center" pills card>
            <b-tab title="Upload" active>
              <b-card-text>
                <!-- <b-card>
                  <b-row>
                    <b-col
                      cols="12"
                      class="d-flex flex-row justify-content-between align-items-center"
                    >
                      <div class="items">Tag: Greeting Item:Add</div>
                      <div class="">
                        <b-button class="inline" size="sm">Upload</b-button>
                      </div>
                    </b-col>
                  </b-row>

                  <b-row class="my-4">
                    <b-col
                      cols="12"
                      class="d-flex flex-row justify-content-between align-items-center"
                    >
                      <div class="items">Tag: Emotion Item:Edit</div>
                      <div class="">
                        <b-button class="inline" size="sm">Upload</b-button>
                      </div>
                    </b-col>
                  </b-row>

                  <b-row class="my-4">
                    <b-col
                      cols="12"
                      class="d-flex flex-row justify-content-between align-items-center"
                    >
                      <div class="items">Tag: Emotion Item:Add</div>
                      <div class="">
                        <b-progress
                          :value="loadingState"
                          :max="max"
                          height="2rem"
                          show-progress
                          animated
                        ></b-progress>
                      </div>
                    </b-col>
                  </b-row>

                  <b-button-group class="w-100">
                    <b-button>Upload</b-button>
                    <b-button>Log</b-button>
                  </b-button-group>
                </b-card>
                 -->

                <b-card no-body v-for="up in upload" :key="up">
                  <b-card-header class="p-0 position-relative">
                    <div class="position-absolute handle card-icon"></div>
                  </b-card-header>
                  <b-card-body
                    class="d-flex justify-content-between align-items-center"
                  >
                    <h6 class="mb-0 card-title">
                      Tag: {{ up.tag }}
                      <br />
                      Item: {{ up.item }}
                    </h6>
                    <div class="progress-bar-circle">
                      <radial-progress-bar
                        v-if="up.isLoading"
                        :diameter="54"
                        :strokeWidth="2"
                        :completed-steps="up.loadingState"
                        :total-steps="100"
                        >{{ up.loadingState }}%</radial-progress-bar
                      >
                      <b-button v-if="!up.isLoading">Upload</b-button>
                    </div>
                  </b-card-body>
                </b-card>
              </b-card-text>
            </b-tab>
            <b-tab title="Log/GMT"
              ><b-card-text>
                <logs />
                <!-- <b-card class="mt-2">
                  <div class="">
                    <div class="dayRecord">
                      <h5 class="my-2">Date: 03/03/2021</h5>
                      <div class="my-2">
                        Tag: Greeting , Item: Add , Time: 02:20pm , Pattern:
                        "Hey How's its going ?"
                      </div>
                      <div class="my-2">
                        Tag: Greeting , Item: Add , Time: 02:20pm
                      </div>
                    </div>

                    <div class="dayRecord">
                      <h5 class="my-2">Date: 03/05/2021</h5>
                      <div class="my-2">Tag: Greeting , Item: Add</div>
                    </div>
                  </div>

                  <b-button-group class="w-100 mt-4">
                    <b-button>Upload</b-button>
                    <b-button>Log</b-button>
                  </b-button-group>
                </b-card> -->
              </b-card-text></b-tab
            >
          </b-tabs>
        </b-card>
      </b-col>
    </draggable>

    <b-row class="mt-4">
      <b-colxx xxs="12" class="chat-app">
        <b-card>
          <div>
            <div class="d-flex flex-row chat-heading">
              <div class="d-flex">
                <h4>Complai Chat</h4>
              </div>
              <div class="d-flex min-width-zero">
                <div
                  class="card-body pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero"
                >
                  <div class="min-width-zero">
                    <!-- <div>
                    <p class="list-item-heading mb-1 truncate">
                      {{ otherUser.title }}
                    </p>
                  </div> -->
                    <!-- <p class="mb-0 text-muted text-small">{{ otherUser.date }}</p> -->
                  </div>
                </div>
              </div>
            </div>
            <div class="separator mb-5" />
            <vue-perfect-scrollbar
              class="scroll"
              :settings="{ suppressScrollX: true, wheelPropagation: false }"
              ref="complaichat"
            >
              <div v-for="message in messages" :key="message.time">
                <b-card
                  no-body
                  :class="{
                    'd-inline-block mb-3': true,
                    'float-left': message.sender === 'bot',
                    'float-right': message.sender === 'user'
                  }"
                >
                  <div class="position-absolute pt-1 pr-2 r-0">
                    <span class="text-extra-small text-muted">{{
                      message.time
                    }}</span>
                  </div>
                  <b-card-body>
                    <div
                      class="d-flex flex-row pb-1"
                      v-if="message.sender === 'bot'"
                    >
                      <img
                        src="/assets/img/profiles/bot.png"
                        class="img-thumbnail border-0 rounded-circle mr-3 list-thumbnail align-self-center xsmall"
                      />
                      <div class="d-flex flex-grow-1 min-width-zero">
                        <div
                          class="m-2 pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero"
                        >
                          <div class="min-width-zero">
                            <p class="mb-0 truncate list-item-heading">
                              {{ message.sender }}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="d-flex flex-row pb-1" v-else>
                      <img
                        src="/assets/img/profiles/avatar.png"
                        class="img-thumbnail border-0 rounded-circle mr-3 list-thumbnail align-self-center xsmall"
                      />
                      <div class="d-flex flex-grow-1 min-width-zero">
                        <div
                          class="m-2 pl-0 align-self-center d-flex flex-column flex-lg-row justify-content-between min-width-zero"
                        >
                          <div class="min-width-zero">
                            <p class="mb-0 truncate list-item-heading">
                              {{ message.sender }}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="chat-text-left">
                      <p class="mb-0 text-semi-muted">{{ message.body }}</p>
                    </div>
                  </b-card-body>
                </b-card>
                <div class="clearfix" />
              </div>
            </vue-perfect-scrollbar>
          </div>
        </b-card>
      </b-colxx>
    </b-row>
  </div>
</template>

<script>
import Draggable from "vuedraggable";
import complai_logs from "../../containers/complai_logs";
import RadialProgressBar from "vue-radial-progress";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "testing",
  components: {
    draggable: Draggable,
    logs: complai_logs,
    "radial-progress-bar": RadialProgressBar
  },
  data() {
    return {
      api: null,
      textMatch: true,
      predictedTag: "Greetings",
      softMax: 0.7,
      max: 100,
      upload: [
        {
          tag: "Greeting",
          item: "add",
          isLoading: true,
          loadingState: 50
        },
        {
          tag: "Emotion",
          item: "edit",
          isLoading: false,
          loadingState: 50
        },
        {
          tag: "Emotion2",
          item: "add",
          isLoading: false,
          loadingState: 50
        }
      ],
      conversationMessages: [],
      messages: [
        {
          sender: "bot",

          body: "Hello World this is general zod speaking , how are you ?",
          time: new Date().toUTCString()
        },
        {
          sender: "user",

          body: "We are fine , are you here for superman ?",
          time: new Date().toUTCString()
        },
        {
          sender: "bot",

          body:
            "Well bro ! , Yeah ! , i was missing him , he was my school buddy , i came from very far away to meet him",
          time: new Date().toUTCString()
        },
        {
          sender: "user",

          body:
            "Ok Bro , You must be dying to meet him , but he is busy with lois lane now a days !!! lol",
          time: new Date().toUTCString()
        }
      ]
    };
  },
  computed: {
    ...mapGetters(["getComplaiChat"])
  },
  methods: {
    scrollToEnd() {
      setTimeout(() => {
        const container = this.$refs.complaichat.$el;
        container.scrollTop = container.scrollHeight;
      }, 0);
    }
  },
  mounted() {
    this.scrollToEnd();
  },
  updated() {
    this.scrollToEnd();
  }
};
</script>

<style>
.chat-area {
  min-height: 300px;
  max-height: 320px;

  scrollbar-width: 2px;
}
</style>
