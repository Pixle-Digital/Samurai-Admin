<template>
  <b-modal
    id="modalright"
    ref="modalright"
    :title="$t('pages.add-new-modal-title')"
    modal-class="modal-right"
  >
    <b-form novalidate>
      <b-form-group :label="$t('pages.product-name')">
        <b-form-input :state="tagValidation" v-model="newItem.title" />
        <b-form-valid-feedback :state="tagValidation"
          >Perfect !</b-form-valid-feedback
        >
        <b-form-invalid-feedback :state="tagValidation"
          >Name must not be empty</b-form-invalid-feedback
        >
      </b-form-group>
      <b-form-group :label="$t('pages.category')">
        <v-select
          :state="catValidation"
          :options="categories"
          v-model="newItem.category"
        />
        <b-form-valid-feedback :state="catValidation"
          >Perfect !</b-form-valid-feedback
        >
        <b-form-invalid-feedback :state="catValidation"
          >Category must not be empty</b-form-invalid-feedback
        >
      </b-form-group>
      <b-form-group :label="$t('pages.description')">
        <b-textarea
          :state="descValidation"
          v-model="newItem.description"
          :rows="2"
          :max-rows="2"
        />
        <b-form-valid-feedback :state="descValidation"
          >Perfect !</b-form-valid-feedback
        >
        <b-form-invalid-feedback :state="descValidation"
          >Desc must not be empty</b-form-invalid-feedback
        >
      </b-form-group>
      <b-form-group label="Price">
        <b-form-input
          :state="priceValidation"
          type="number"
          v-model="newItem.price"
        />
        <b-form-valid-feedback :state="priceValidation"
          >Perfect !</b-form-valid-feedback
        >
        <b-form-invalid-feedback :state="priceValidation"
          >Price must not be empty</b-form-invalid-feedback
        >
      </b-form-group>
      <b-form-group label="Quantity">
        <b-form-input
          :state="quanValidation"
          type="number"
          v-model="newItem.quantity"
        />
        <b-form-valid-feedback :state="quanValidation"
          >Perfect !</b-form-valid-feedback
        >
        <b-form-invalid-feedback :state="quanValidation"
          >Quantity must not be empty</b-form-invalid-feedback
        >
      </b-form-group>
      <b-form-group label="Image">
        <vue-dropzone
          ref="myVueDropzone"
          id="dropzone"
          :options="dropzoneOptions"
        ></vue-dropzone>
      </b-form-group>
      <b-form-group :label="$t('pages.status')">
        <b-form-radio-group
          stacked
          class="pt-2"
          :options="statuses"
          v-model="newItem.status"
        />
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
import VueDropzone from "vue2-dropzone";
import moment from "moment";
export default {
  components: {
    "v-select": vSelect,
    "vue-dropzone": VueDropzone,
  },
  props: ["categories", "statuses"],
  data() {
    const db = firebase.database();
    return {
      dropzoneOptions: {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": "true",
          "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
          "Access-Control-Allow-Headers":
            "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers",
        },
        url: "gs://samurai-shisha.appspot.com/post",
        thumbnailHeight: 160,
        maxFilesize: 2,
        previewTemplate: this.dropzoneTemplate(),
        headers: {
          "My-Awesome-Header": "header value",
        },
      },
      productref: db.ref("/products"),
      newItem: {
        title: "",
        category: "",
        description: "",
        status: "",
        price: "",
        quantity: "",
      },
      img1: null      
    };
  },
  methods: {
    onUpload() {
      this.img1 = null;
      const storageRef = firebase
        .storage()
        .ref(`${this.imageData.name}`)
        .put(this.imageData);
      storageRef.on(
        `state_changed`,
        (snapshot) => {
          this.uploadValue =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },
        (error) => {
          console.log(error.message);
        },
        () => {
          this.uploadValue = 100;
          storageRef.snapshot.ref.getDownloadURL().then((url) => {
            this.img1 = url;
            console.log(this.img1);
          });
        }
      );
    },
    dropzoneTemplate() {
      return `<div class="dz-preview dz-file-preview mb-3">
                  <div class="d-flex flex-row "> <div class="p-0 w-30 position-relative">
                      <div class="dz-error-mark"><span><i></i>  </span></div>
                      <div class="dz-success-mark"><span><i></i></span></div>
                      <div class="preview-container">
                        <img data-dz-thumbnail class="img-thumbnail border-0" />
                        <i class="simple-icon-doc preview-icon"></i>
                      </div>
                  </div>
                  <div class="pl-3 pt-2 pr-2 pb-1 w-70 dz-details position-relative">
                    <div> <span data-dz-name /> </div>
                    <div class="text-primary text-extra-small" data-dz-size /> </div>
                    <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>
                    <div class="dz-error-message"><span data-dz-errormessage></span></div>
                  </div>
                  <a href="#" class="remove" data-dz-remove> <i class="glyph-icon simple-icon-trash"></i> </a>
                </div>
        `;
    },
    addNewItem() {
      console.log("adding item : ", this.newItem);
      if (
        this.newItem.title == "" &&
        this.newItem.category == "" &&
        this.newItem.description == "" &&
        this.newItem.price == "" &&
        this.newItem.quantity == ""
      ) {
        this.$bvToast.toast(`Fields are empty `, {
          title: `Please Fill all the fields `,
          autoHideDelay: 5000,
          variant: "danger",
          solid: true,
        });
      } else {
        let self = this;
        var autoId = self.productref.push().key;
        self.productref
          .child(autoId)
          .set({
            createdAt: moment().format("DD MMM YYYY"),
            title: this.newItem.title,
            price: this.newItem.price,
            category: this.newItem.category.value,
            description: this.newItem.description,
            status: this.newItem.status,
            quantity: this.newItem.quantity,
            id: autoId,
          })
          .then((response) => {
            this.$bvToast.toast(`Form Submitted`, {
          title: `Product Added`,
          autoHideDelay: 5000,
          variant: "success",
          solid: true,
        });
            this.$router.go();
          });
      }
    },
    hideModal(refname) {
      this.$refs[refname].hide();
    },
  },
  computed: {
    tagValidation() {
      if (this.newItem.title == "" || this.newItem.title == null) {
        return false;
      } else {
        return null;
      }
    },
    catValidation() {
      if (this.newItem.category == "" || this.newItem.category == null) {
        return false;
      } else {
        return null;
      }
    },
    descValidation() {
      if (this.newItem.description == "" || this.newItem.description == null) {
        return false;
      } else {
        return null;
      }
    },
    priceValidation() {
      if (this.newItem.price == "" || this.newItem.price == null) {
        return false;
      } else {
        return null;
      }
    },
    quanValidation() {
      if (this.newItem.quantity == "" || this.newItem.quantity == null) {
        return false;
      } else {
        return null;
      }
    },
  },
};
</script>
