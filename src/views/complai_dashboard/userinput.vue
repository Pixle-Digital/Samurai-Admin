<template>
  <div class="">
    <draggable class="row">
      <b-col cols="8">
        <b-tabs align="center" pills card>
            <b-tab title="Auto Error Report" active>

              <h2>Auto Error Report</h2>
          <vue-perfect-scrollbar
            class="scroll"
            :settings="{ suppressScrollX: true, wheelPropagation: false }"
            ref="auto-error-report"
          >
            <div class="auto-error-report">
              <b-card class="pt my-1" bg-variant="secondary">
                <p>What is the legal age of gambling in belgium</p>
              </b-card>
              <b-card class="pt my-1" bg-variant="secondary">
                <p>What is the legal age of gambling in belgium</p>
              </b-card>
              <b-card class="pt my-1" bg-variant="secondary">
                <p>What is the legal age of gambling in belgium</p>
              </b-card>
            </div>
          </vue-perfect-scrollbar>
     
        <b-card class="pt-3" no-body>
          <b-tabs align="center" pills card>
            <b-tab title="Preview" active>
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
              <!-- <b-card-text>
                <b-card>
                  <h2>Auto Error Report</h2>
                  <vue-perfect-scrollbar
                    class="scroll"
                    :settings="{
                      suppressScrollX: true,
                      wheelPropagation: false
                    }"
                    ref="preview"
                  >
                    <div class="preview">
                      <div class="bubble-question my-2">
                        <b-badge variant="light"
                          >what is the legal age for gambling in
                          belgium</b-badge
                        >
                      </div>
                      <div class="bubble-answer my-2">
                        <b-badge>Sorry i dont understand</b-badge>
                      </div>
                    </div>
                  </vue-perfect-scrollbar>
                  <b-button-group class="w-100">
                    <b-button>Preview</b-button>
                    <b-button>Information/Add</b-button>
                  </b-button-group>
                </b-card></b-card-text> -->
                </b-tab
            >
            <b-tab title="Information"
              ><b-card-text>
                <b-card>
                  <h2>Information</h2>
                  <b-form-group label="Text">
                    <b-form-input type="text"></b-form-input>
                  </b-form-group>
                  <h3>Add</h3>
                  <b-form-group label="Tag Search">
                    <b-form-input type="text"></b-form-input>
                  </b-form-group>
                  <b-form-group label="Tag Select">
                    <fieldset class="form-group" id="__BVID__208">
                      <legend
                        tabindex="-1"
                        class="bv-no-focus-ring col-form-label pt-0"
                        id="__BVID__208__BV_label_"
                      ></legend>
                      <div>
                        <select size="0" class="form-control" id="__BVID__209">
                          <option value=""></option>
                          <option value="Option1">Option1</option>
                          <option value="Option2">Option2</option>
                          <option value="Option3">Option3</option>
                          <option value="Option4">Option4</option>
                          <option value="Option5">Option5</option></select
                        ><!----><!----><!---->
                      </div>
                    </fieldset>
                  </b-form-group>
                  <b-form-group label="Tag Description">
                    <vue-perfect-scrollbar
                      class="scroll"
                      :settings="{
                        suppressScrollX: true,
                        wheelPropagation: false
                      }"
                      ref="tag-description"
                    >
                      <b-card class="tag-description">
                        Pattern: "How are you ?" Response: "Im Fine !"
                      </b-card>
                    </vue-perfect-scrollbar>
                  </b-form-group>

                  <b-form-group>
                    <b-button>Add</b-button>
                    <span class="mx-2">To</span> <span>Tag</span>
                  </b-form-group>

                  <b-form-group>
                    <b-button>Download PDF Copy</b-button>
                  </b-form-group>

                  <b-button-group class="w-100">
                    <b-button>Preview</b-button>
                    <b-button>Information/Add</b-button>
                  </b-button-group>
                </b-card></b-card-text
              ></b-tab
            >
          </b-tabs>
        </b-card>
              
                </b-tab>
            <b-tab title="User Manual Report">
                            <h2>User Manual Report</h2>
          <vue-perfect-scrollbar
            class="scroll"
            :settings="{ suppressScrollX: true, wheelPropagation: false }"
            ref="auto-error-report"
          >
            <div class="auto-error-report">
              <b-card class="pt my-1" bg-variant="secondary">
                <p>What is the legal age of gambling in belgium</p>
              </b-card>
              <b-card class="pt my-1" bg-variant="secondary">
                <p>What is the legal age of gambling in belgium</p>
              </b-card>
              <b-card class="pt my-1" bg-variant="secondary">
                <p>What is the legal age of gambling in belgium</p>
              </b-card>
            </div>
          </vue-perfect-scrollbar>
                </b-tab>
          </b-tabs>
        

      </b-col>
 
    </draggable>
  </div>
</template>


<script>
import {
    mapGetters,
    mapActions
} from 'vuex'
import ApplicationMenu from '../../../src/components/Common/ApplicationMenu'
import ContactList from '../../../src/components/ChatApp/ContactList'
import ConversationList from '../../../src/components/ChatApp/ConversationList'
import ConversationDetail from '../../../src/components/ChatApp/ConversationDetail'
import Draggable from "vuedraggable";


export default {
    name: "userinput",

    components: {
        'application-menu': ApplicationMenu,
        'contact-list': ContactList,
        'conversation-list': ConversationList,
        'conversation-detail': ConversationDetail,
          draggable: Draggable

    },
   data() {
 return {
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
}
},
    computed: {
        ...mapGetters(['currentUser', 'isLoadContacts', 'isLoadConversations', 'error', 'contacts', 'contactsSearchResult', 'conversations'])
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
  },
    
    beforeDestroy() {
        document.body.classList.remove("no-footer");
    },
    watch: {
        searchKey(val, oldVal) {
            this.searchContacts({
                userId: this.currentUser.id,
                searchKey: val
            })
        }
    }
}
</script>

<style>
.bubble-question {
  text-align: right;
  font-size: 1rem;
}

.bubble-answer {
  text-align: left;
  font-size: 1rem;
}

.tag-description {
  min-height: 200px;
  max-height: 210px;
}

.preview {
  min-height: 500px;
  max-height: 501px;
}

.auto-error-report {
  min-height: 500px;
  max-height: 501px;
}

.manual-user-report {
  min-height: 500px;
  max-height: 501px;
}
</style>
