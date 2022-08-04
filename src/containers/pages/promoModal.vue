<template>
  <b-modal
    id="modalright1"
    ref="modalright1"
    title="Add New Promo"
    modal-class="modal-right"
  >
    <b-form novalidate>
      <b-form-group label="Promo Text">
        <b-form-input :state="promoValidation" v-model="newItem.promo" />
        <b-form-valid-feedback :state="promoValidation"
          >Perfect !</b-form-valid-feedback
        >
        <b-form-invalid-feedback :state="promoValidation"
          >Name must not be empty</b-form-invalid-feedback
        >
      </b-form-group>
      <b-form-group label="Type">
        <v-select :state="typeValidation" :options="type" v-model="newItem.type" />
        <b-form-valid-feedback :state="typeValidation"
          >Perfect !</b-form-valid-feedback
        >
        <b-form-invalid-feedback :state="typeValidation"
          >Category must not be empty</b-form-invalid-feedback
        >
      </b-form-group>
      <b-form-group label="Amount">
        <b-form-input :state="amountValidation" type="number" v-model="newItem.amount" />
         <b-form-valid-feedback :state="amountValidation"
          >Perfect !</b-form-valid-feedback
        >
        <b-form-invalid-feedback :state="amountValidation"
          >Price must not be empty</b-form-invalid-feedback
        >
      </b-form-group>
      <b-form-group label="Usage">
        <b-form-input :state="useValidation" type="number" v-model="newItem.usage" />
        <b-form-valid-feedback :state="useValidation"
          >Perfect !</b-form-valid-feedback
        >
        <b-form-invalid-feedback :state="useValidation"
          >Quantity must not be empty</b-form-invalid-feedback
        >
      </b-form-group>
      <b-form-group label="Expiry">
        <datepicker :bootstrap-styling="true" :state="expValidation" :placeholder="$t('form-components.date')" v-model="newItem.expiry">
        </datepicker>
        <b-form-valid-feedback :state="expValidation"
          >Perfect !</b-form-valid-feedback
        >
        <b-form-invalid-feedback :state="expValidation"
          >Quantity must not be empty</b-form-invalid-feedback
        >
      </b-form-group>
    </b-form>

    <template slot="modal-footer">
      <b-button variant="outline-secondary" @click="hideModal('modalright')">{{
        $t("pages.cancel")
      }}</b-button>
      <b-button variant="primary" @click="addNewItem()" class="mr-1">{{
        $t("pages.submit")
      }}</b-button>
    </template>
  </b-modal>
</template>
<script>
import vSelect from "vue-select";
import firebase from "firebase";
import "vue-select/dist/vue-select.css";
import moment from 'moment'
import Datepicker from "vuejs-datepicker";
export default {
  components: {
    "v-select": vSelect,
    datepicker: Datepicker
  },
  props: ["categories", "statuses"],
  data() {
    const db = firebase.database();
    return {
      promoref: db.ref('/promocode'),
      newItem: {
        promo: "",
        type: "",
        amount: "",
        usage: "",
        expiry: "",
      },
      type: ["Percentage", "Price"],
      
    };
  },
  methods: {
    addNewItem() {
       console.log("adding item : ", this.newItem);
      if (  this.newItem.promo == "" &&
            this.newItem.type == "" &&
            this.newItem.usage == "" &&
            this.newItem.amount == "" &&
            this.newItem.expiry == "" )
          {
             this.$bvToast.toast(`Fields are empty `, {
                title: `Please Fill all the fields `,
                autoHideDelay: 5000,
                variant: "danger",
                solid: true
            });
          } 
          else {
            let self = this;
                self.promoref.push({
                    createdAt: moment().format('DD MMM YYYY'),
                    promo: this.newItem.promo,
                    amount: this.newItem.amount,
                    type: this.newItem.type,
                    usage: this.newItem.usage,
                    expiry: moment(this.newItem.expiry).format('DD MMM YYYY'),
                    status: true,
                }).then((response) => {
                    console.log(response)
                })
          }        
    
    },
    hideModal(refname) {
      this.$refs[refname].hide();
    }
  },
   computed: {
    promoValidation() {
      if (this.newItem.promo == "" || this.newItem.promo == null) {
        return false;
      } else {
        return null;
      }
    },
    typeValidation() {
      if (this.newItem.type == "" || this.newItem.type == null) {
        return false;
      } else {
        return null;
      }
    },
    amountValidation(){
      if (this.newItem.amount == "" || this.newItem.amount == null) {
        return false;
      } else {
        return null;
      }
    },
    useValidation(){
      if (this.newItem.usage == "" || this.newItem.usage == null) {
        return false;
      } else {
        return null;
      }
    },
    expValidation(){
       if (this.newItem.expiry == "" || this.newItem.expiry == null) {
        return false;
      } else {
        return null;
      }
    }
     
  },
};
</script>
