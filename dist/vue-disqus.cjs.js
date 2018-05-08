'use strict';var VueDisqus={render:function(){var a=this,b=a.$createElement,c=a._self._c||b;return c('div',{attrs:{"id":"disqus_thread"}})},staticRenderFns:[],name:'vue-disqus',props:{shortname:{type:String,required:!0},identifier:{type:String,required:!1},url:{type:String,required:!1},title:{type:String,required:!1},remote_auth_s3:{type:String,required:!1},api_key:{type:String,required:!1},sso_config:{type:Object,required:!1},language:{type:String,required:!1}},mounted(){if(window.DISQUS){this.reset(window.DISQUS);return}this.init()},methods:{reset(a){let b=this;a.reset({reload:!0,config:function(){b.setBaseConfig(this)}})},init(){let a=this;window.disqus_config=function(){a.setBaseConfig(this)};setTimeout(()=>{let a=document,b=a.createElement('script');b.setAttribute('id','embed-disqus');b.setAttribute('data-timestamp',+new Date());b.type='text/javascript';b.async=!0;b.src=`//${this.shortname}.disqus.com/embed.js`
        ;(a.head||a.body).appendChild(b)},0)},setBaseConfig(a){a.page.identifier=this.identifier||this.$route.path||window.location.pathname;a.page.url=this.url||this.$el.baseURI;this.title&&(a.page.title=this.title);this.remote_auth_s3&&(a.page.remote_auth_s3=this.remote_auth_s3);this.api_key&&(a.page.api_key=this.api_key);this.sso_config&&(a.sso=this.sso_config);this.language&&(a.language=this.language);a.callbacks.onReady=[()=>{this.$emit('ready')}]}}};function install(a){a.component('VueDisqus',VueDisqus)}typeof window!=='undefined'&&typeof window.Vue!=='undefined'&&window.Vue.use(install);module.exports=install
