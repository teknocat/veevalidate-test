<template>
  <v-form
    ref="form"
    v-model="valid"
  >
    <v-text-field
      v-model="awsAccountId"
      :rules="[rules.required, rules.awsAccountId]"
      label="AWSアカウントID"
      required
    ></v-text-field>

    <v-text-field
      v-model="bucketName"
      :rules="[rules.required, rules.bucketName]"
      label="バケット名"
      required
    ></v-text-field>

    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="submit"
    >
      Submit
    </v-btn>
  </v-form>
</template>

<script>
export default {
  name: 'VuetifyForm',

  data: () => ({
    valid: true,
    awsAccountId: '',
    bucketName: '',
    rules: {
      required: (value) => !!value || '必須項目です',
      awsAccountId: (value) => {
        return /^[0-9]{12}$/.test(value) || 'AWSアカウントID は12桁の数値です';
      },
      bucketName: (value) => {
        return /^[a-z0-9.-]{3,63}$/.test(value) || 'バケット名 のフォーマットが正しくありません';
      },
    },
  }),

  methods: {
    submit () {
      const result = this.$refs.form.validate();
      console.log('submit', result);
    },
  },
}
</script>