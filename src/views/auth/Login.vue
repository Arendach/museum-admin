<template>
  <div class="bg-light min-vh-100 d-flex flex-row align-items-center">
    <CContainer>
      <CRow class="justify-content-center">
        <CCol :md="8">
          <CCardGroup>
            <CCard class="p-4">
              <CCardBody>
                <CForm>
                  <h1>Авторизація</h1>
                  <p class="text-medium-emphasis">
                    Увійдіть до вашого акаунту
                  </p>
                  <CInputGroup class="mb-3">
                    <CInputGroupText>
                      <CIcon icon="cil-user"/>
                    </CInputGroupText>
                    <CFormInput
                      :invalid="this.isError"
                      v-model="email"
                      placeholder="E-Mail"
                      autocomplete="username"
                      @input="isError = false"
                    />
                  </CInputGroup>
                  <CInputGroup class="mb-4">
                    <CInputGroupText>
                      <CIcon icon="cil-lock-locked"/>
                    </CInputGroupText>
                    <CFormInput
                      :invalid="this.isError"
                      feedback="Введені логін або пароль не вірні"
                      v-model="password"
                      type="password"
                      placeholder="Пароль"
                      autocomplete="current-password"
                      @input="isError = false"
                    />
                  </CInputGroup>
                  <CRow>
                    <CCol :xs="6">
                      <CButton color="primary" class="px-4" @click="login">
                        Авторизуватись
                      </CButton>
                    </CCol>
                    <CCol :xs="6" class="text-right">
                      <CButton color="link" class="px-0">
                        Забули пароль?
                      </CButton>
                    </CCol>
                  </CRow>
                </CForm>
              </CCardBody>
            </CCard>
            <CCard class="text-white bg-primary py-5" style="width: 44%">
              <CCardBody class="text-center">
                <div>
                  <h2>Реєстрація</h2>
                  <p>
                    Якщо в вас немає акаунту то ви можете зареєструватись
                  </p>
                  <CButton color="light" variant="outline" class="mt-3" @click="login">
                    Зареєструватись зараз!
                  </CButton>
                </div>
              </CCardBody>
            </CCard>
          </CCardGroup>
        </CCol>
      </CRow>
    </CContainer>
  </div>
</template>

<script>
import Api from '@/lib/Api'

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
      isError: false,
    }
  },
  methods: {
    login() {
      Api.post('/login', {
        email: this.email,
        password: this.password,
      })
        .then(res => {
          window.localStorage.setItem('access_token', res.access_token)
          this.successToast('Ви вдало авторизувались')
          this.$router.push({name: 'index'})
        })
        .catch(res => {
          if (res.status === 401) {
            this.isError = true
          }
        })
    }
  }
}
</script>
