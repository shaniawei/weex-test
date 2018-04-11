
<template>
  <div class="m-order-detail">
    <div class="info-1 bg-color-fff">
      <div class="base-info">
        <text class="name">{{ orderDetail.username }}({{ orderDetail.sex === '男' ? '先生': '女士' }})</text>
        <div class="phone flex-direction">
          <image class="icon-phone" src='../../img/icon_phone3x.png'></image>
          <text class="font-30 color-333">{{ orderDetail.mobile }} </text>
          <text class='font-30 color-333' style="color:#999" v-if="(orderDetail.order_status !== '2') && (orderDetail.order_status !== '3')">(购入后可见)</text>
        </div>
        <div class="line"></div>
        <image src='../../img/icon_phone_gray3x.png' class="contact btn-iphone" v-bind:class="{sure:(orderDetail.order_status === '3' || orderDetail.order_status === '2')}" @click="telOrSms('tel')"></image>
        <image src='../../img/icon_wechat_gray3x.png' class="contact btn-sms" v-bind:class="{sure:(orderDetail.order_status === '3' || orderDetail.order_status === '2')}" @click="telOrSms('sms')"></image>
      </div>
      <div class="demand">
        <div class="item flex-direction"><text class="font-30 color-333">申请时间：{{ orderDetail.apply_time }}</text></div>
        <div class="item flex-direction row2"><text class="font-30 color-333">贷款金额：</text><text class="font-30 color-333" style="color:#f16700;font-size:40px;">{{ orderDetail.loan_money }}</text></div>
        <div class="item flex-direction"><text class="font-30 color-333">贷款期限：{{ orderDetail.loan_deadline }}</text></div>
      </div>
      <div class="shop-status" v-if="orderDetail.order_status === '3'">
        <div class="line"></div>
        <div class="item flex-direction" style="margin-top:24px;margin-bottom:10px;"><text class="font-30 color-333">买入时间：{{ orderDetail.complete_time }}</text></div>
        <div class="item flex-direction"><text class="font-30 color-333">买入价格：{{ orderDetail.buy_price }}元({{ orderDetail.buy_type === '1' ? '共享单' : '买断单' }})</text></div>
      </div>
    </div>

    <div class="aptitude flex-direction bg-color-fff"
         v-if="(orderDetail.has_car === 'Y') || (orderDetail.has_car_loan === 'Y') || (orderDetail.has_house === 'Y') || (orderDetail.has_house_loan === 'Y') || (orderDetail.has_credit_card === 'Y') || (orderDetail.has_social === 'Y') || (orderDetail.has_insurance === 'Y')">
      <div class="item flex-direction" v-if="orderDetail.has_car === 'Y'">
        <image src='../../img/icon_car3x.png' class="icon icon-car"></image><text class="font-28 color-333">有车</text>
      </div>
      <div class="item flex-direction" v-if="orderDetail.has_car_loan === 'Y'">
        <image src='../../img/icon_car23x.png' class="icon icon-car-loan"></image><text class="font-28 color-333">有车贷</text>
      </div>
      <div class="item flex-direction" v-if="orderDetail.has_house === 'Y'">
        <image src='../../img/icon_house3x.png' class="icon icon-house"></image><text class="font-28 color-333">有房</text>
      </div>
      <div class="item flex-direction" v-if="orderDetail.has_house_loan === 'Y'">
        <image src='../../img/icon_house23x.png' class="icon icon-house-loan"></image><text class="font-28 color-333">有房贷</text>
      </div>
      <div class="item flex-direction" v-if="orderDetail.has_credit_card === 'Y'">
        <image src='../../img/icon_creditcard3x.png' class="icon icon-credit"></image><text class="font-28 color-333">有信用卡</text>
      </div>
      <div class="item flex-direction" v-if="orderDetail.has_social === 'Y'">
        <image src='../../img/icon_sl3x.png' class="icon icon-social"></image><text class="font-28 color-333">有社保</text>
      </div>
      <div class="item flex-direction" v-if="orderDetail.has_public_fund === 'Y'">
        <image src='../../img/icon_housefund3x.png' class="icon icon-house-fund"></image><text class="font-28 color-333">有公积金</text>
      </div>
      <div class="item flex-direction" v-if="orderDetail.has_loan === 'Y'">
        <image src='../../img/icon_bancklend3x.png' class="icon icon-loan"></image><text class="font-28 color-333">有贷款</text>
      </div>
      <div class="item flex-direction" v-if="orderDetail.has_weilidai === 'Y'">
        <image src='../../img/icon_weilidailogo3x.png' class="icon icon-weilidai"></image><text class="font-28 color-333">有微粒贷</text>
      </div>
      <div class="item flex-direction" style="width:100%;margin-bottom:0;" v-if="orderDetail.has_insurance === 'Y'">
        <image src='../../img/icon_insurance3x.png' class="icon icon-insurance"></image> <text class="font-28 color-333">寿险保单</text> <text class="font-28 color-666">({{ orderDetail.insurance_money }})</text>
      </div>
    </div>

    <div class="info-2 bg-color-fff">
      <div class="item flex-direction">
        <text class="fl font-30 color-666">城市</text>
        <text class="fr font-30 color-666">{{ orderDetail.city }}</text>
      </div>
      <div class="item flex-direction">
        <text class="fl font-30 color-666">年龄</text>
        <text class="fr font-30 color-666">{{ orderDetail.age }} 岁</text>
      </div>
      <div class="item flex-direction" style="border-bottom:0;">
        <text class="fl font-30 color-666">性别</text>
        <text class="fr font-30 color-666">{{ orderDetail.sex }}</text>
      </div>
    </div>

    <div class="info-2 bg-color-fff" v-bind:class="{'no-b-border':(orderDetail.order_status === '3' || orderDetail.order_status === '2')}">
      <div class="item flex-direction">
        <text class="fl font-30 color-666">职业类型</text>
        <text class="fr font-30 color-666">{{ orderDetail.profession }}</text>
      </div>
      <div class="item flex-direction">
        <text class="fl font-30 color-666">在职时长</text>
        <text class="fr font-30 color-666">{{ orderDetail.job_time }}</text>
      </div>
      <div class="item flex-direction">
        <text class="fl font-30 color-666">收入</text>
        <text class="fr font-30 color-666">{{ orderDetail.income }}</text>
      </div>
      <div class="item flex-direction" style="border-bottom-width:0;">
        <text class="fl font-30 color-666">发薪方式</text>
        <text class="fr font-30 color-666">{{orderDetail.payment }}</text>
      </div>
    </div>

    <div style="height:124px;" v-if="orderDetail.order_status !== '2' && orderDetail.order_status !== '3'"></div>
    <div style="height:46.5px;" v-if="orderDetail.order_status === '2' || orderDetail.order_status === '3'"></div>

    <div class="shopping" v-if="orderDetail.order_status !== '2' && orderDetail.order_status !== '3'">
      <div class="order-status flex-direction">
        <div class="item flex-direction">
            <image class='icon' v-bind:src="checked == false?'../../img/icon_selected_gray3x.png':'../../img/icon_selected_orange3x.png'" @click="changeOrderStatus('2')" v-bind:checked="buy_type !== '1' ? true : false" v-bind:disabled="order_type === '3' || orderDetail.buy_type !== '0' ? true : false" value="N"></image>
            <div class="des">
              <text class="font-26 color-333 font-bold">共享订单</text>
              <text class="font-26 color-666">当前已共享{{ orderDetail.share_num }}/3</text>
            </div>

        </div>
        <div class="item flex-direction" @click="tipMS">
            <image class='icon' :src="checked == false?'../../img/icon_selected_gray3x.png':'../../img/icon_selected_orange3x.png'" @click="changeOrderStatus('2')" v-bind:checked="buy_type !== '1' ? true : false" v-bind:disabled="order_type === '3' || orderDetail.buy_type !== '0' ? true : false" value="N"></image>
            <div class="des">
              <text class="font-26 color-333 font-bold">买断订单</text>
              <text class="font-26 color-666">个人独享,轻松无打扰</text>
            </div>
        </div>
      </div>
      <div class="price-shop bg-color-fff flex-direction">
        <div class="item price flex-direction" style='width:62%;'>
          <text class="font-24 color-167">¥</text>
          <text class="font-40 color-167 font-bold" v-if="buy_type === '0'">{{ orderDetail.share_price }}</text>
          <text class="font-40 color-167 font-bold" v-if="buy_type === '1'">{{ orderDetail.share_price }}</text>
          <text class="font-40 color-167 font-bold" v-if="buy_type === '2'">{{ orderDetail.exclusive_price }}</text>
          <del class="font-24 color-167">(原价: ¥ {{ orderDetail.basic_price }})</del>
        </div>
        <div class="item btn-shop bg-color-167" style='width:38%;'>
          <text class='font-38 color-fff' v-if="orderDetail.order_status === '0'" @click="goShopping">立即购买</text>
          <text class='font-38 color-fff' v-if="orderDetail.order_status === '1'" @click="goShopping">继续购买</text>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
/*eslint-disable*/
  export default {
    name: 'OrderDetail',
    data () {
      return {
        checked:false,
        user_id: this.$route.query.user_id,
        order_type: this.$route.query.order_type, // 1：普通购买 3：秒杀
        buy_type: '1',   // 1: 共享  2： 买断
        orderDetail: {
          'age': '23',
          'apply_time': '2017-11-20 17:14:12',
          'buy_price': '10000',  // 如果购买了，这里是购买价格
          'complete_time': '2018-10-10 10:10',  // 如果名单已购买，这里是购买时间
          'buy_type': '0',  // 0-可以共享购买也可以买断，1-只能共享购买，2-只能买断购买
          'city': '广州',
          'loan_deadline': '6个月以下',
          'exclusive_price': '25',  // 买断价格
          'has_loan': 'Y',
          'has_car': 'Y',
          'has_car_loan': 'Y',
          'has_credit_card': 'Y',
          'has_house': 'Y',
          'has_house_loan': 'Y',
          'has_insurance': 'Y',
          'has_social': 'Y',
          'has_public_fund': 'Y',
          'has_weilidai': 'Y',
          'income': '4000~5000元',
          'insurance_money': '寿险年保费合计0元',
          'job_time': '36个月以上',
          'loan_money': '5万元以下',
          'mobile': '132********',
          'order_id': '',
          'order_status': '1',  // 1-没有订单，2-下订单没有付款，3-已经购买
          'payment': '现金发放',
          'basic_price': '2240',
          'profession': '私营业主',
          'sex': '男',
          'share_num': '0',  // 当前的共享数量
          'share_price': '5', // 共享价格
          'username': '吴镇帆'
        }
      }
    },
    // beforeCreate () {
    //   if (this.$COSTANT.PLATFORM === 'ios' && this.$COSTANT.APP_NAME === 'XDY') {
    //     this.$COMMON_FUN.Cookie.set('buyer_id', this.$route.query.buyer_id)
    //     this.$COMMON_FUN.Cookie.set('g_token', this.$route.query.g_token)
    //   }
    // },
    // mounted () {
    //   this.$COMMON_FUN.requestNative({
    //     tagname: 'clearHistory',
    //     params: {
    //       clear: true
    //     }
    //   })
    //   this.$COMMON_FUN.requestNative({
    //     tagname: 'setTitle',
    //     params: {
    //       title: '订单详情'
    //     }
    //   })
    //   this.getOrderDetail()
    // },
    methods: {
      tipMS () {
        if (this.order_type === '3') {
          this.Toast({
            message: '秒杀不能购买买断订单',
            position: 'middle',
            duration: 3000
          })
        }
      },
      getOrderDetail () {
        this.$http({
          url: '/query_item_detail',
          params: {
            'user_id': this.user_id
          }
        }, (res) => {
          this.orderDetail = res.data
          this.buy_type = (res.data.buy_type === '2' ? '2' : '1')
        })
      },
      telOrSms (type) {
        if (this.orderDetail.order_status === '0' || this.orderDetail.order_status === '1') {
          this.Toast({
            message: '请先完成购买',
            position: 'middle',
            duration: 3000
          })
          return false
        }
        //   let link = 'http://***/?type=' + type + '&mobile=' + this.orderDetail.mobile
        //   console.log(link)
        if (type === 'sms') {
          this.$COMMON_FUN.requestNative({
            tagname: 'sendSMS',
            params: {
              mobile: this.orderDetail.mobile,
              message: ''
            }
          })
        } else if (type === 'tel') {
          this.$COMMON_FUN.requestNative({
            tagname: 'callPhone',
            params: {
              mobile: this.orderDetail.mobile
            }
          })
        }
      },
      changeOrderStatus (status) {
        this.buy_type = status
      },
      goShopping () {
        if (this.$COMMON_FUN.Cookie.get('buyer_id') === '9999') {
          this.$COMMON_FUN.requestNative({
            tagname: 'startLogin',
            params: {
              toast: '',
              url: window.location.href
            }
          })
          return
        }

        this.$http({
          url: '/get_buyer_balance',
          params: {}
        }, (res) => {
          if (res.data.auth_status === '2') {
            this.Toast({
              message: '正在审核中',
              position: 'middle',
              duration: 3000
            })
          } else if (res.data.auth_status === '3') {
            this.$COMMON_FUN.requestNative({
              tagname: 'tempRemind',
              params: {}
            })
          } else {
            this.MessageBox ({
              title: '认证提醒',
              message: '您还没有进行信贷员身份认证<br/>认证后方能进行购买操作',
              showCancelButton: true,
              confirmButtonText: '立即前往',
              cancelButtonText: '先看看'
            }).then(action => {
              if (action === 'confirm') {
                this.$COMMON_FUN.requestNative({
                  tagname: 'identityAuth',
                  params: {}
                })
              }
            })
          }
        })
        // if (this.orderDetail.order_id === '' || this.orderDetail.order_id === undefined) {
        //   // 保存数据 跳转支付
        //   let _price = (this.buy_type === '2' ? this.orderDetail.exclusive_price : this.orderDetail.share_price)
        //   this.$http({
        //     url: '/create_order',
        //     params: {
        //       'user_id': this.user_id,
        //       'buy_type': this.buy_type,
        //       'order_type': this.order_type,
        //       'price': _price
        //     }
        //   }, (res) => {
        //     this.$router.push({
        //       path: 'Payment',
        //       query: {
        //         'order_id': res.data.order_id,
        //         'order_type': this.order_type,
        //         'user_id': this.user_id
        //       }
        //     })
        //   })
        // } else {
        //   // 跳转支付
        //   this.$router.push({
        //     path: 'Payment',
        //     query: {
        //       'order_id': this.orderDetail.order_id,
        //       'order_type': this.order_type,
        //       'user_id': this.$route.query.user_id
        //     }
        //   })
        // }
      }
    }
  }
</script>

<style src='./Home.css'></style>


