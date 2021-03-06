import place from "../../components/place/place";
import { Indicator, MessageBox, Toast } from "mint-ui";
export default {
  data() {
    return {
      nickname: "",
      sex: 1, //1 女生 2 男生
      birthValue: "1990-01-01",
      startDate: "1900-01-01",

      timeValue: "", //出生时间
      popupVisible: false,

      placeVal: "",
      lngAndLat:'', //经纬度
      avaterUrl: "" //头像
    };
  },
  components: { place },
  beforeRouteEnter(to, from, next) {
    console.log(from.path);
    let avaterUrl = "";
    if (from.path == "/crop") {
      console.log(to.params.avater)
      avaterUrl = to.params.avater;
    }
    next(vm => {
      vm.avaterUrl = avaterUrl;
    });
  },
  beforeRouteUpdate(to, from, next) {
    next();
  },
  beforeRouteLeave(to, from, next) {
    next();
  },
  mounted() {
    let that = this;
  },
  computed: {},
  watch: {
    nickname(val) {
      let that = this;
      if (that.$GLOBAL.charNumber(val) > 16) {
        that.nickname = that.$GLOBAL.charCut(val);
      } else {
        that.nickname = val;
      }
    }
  },
  methods: {
    // 选择生日
    birth() {
      this.$refs.birth.open();
    },
    // 生日确定
    birthConfirm(val) {
      let date = new Date(val);
      this.birthValue = this.$GLOBAL.dateFormat("yyyy-MM-dd", date);
    },
    // 出生时间
    time() {
      this.$refs.time.open();
    },
    timeConfirm(val) {
      this.timeValue = val;
    },

    // 出生地点
    location() {
      this.popupVisible = true;
    },
    // 出生地点确定
    placeCon(val) {
      this.popupVisible = false;
      this.placeVal = val.value;
      this.lngAndLat = val
    },
    // 出生地点关闭
    placeCan() {
      this.popupVisible = false;
    },
    // 选择头像
    avater() {
      this.$refs.inputer.click();
    },
    chooseImg(e) {
      this.$router.push({
        name: "crop",
        params: { file: this.$refs.inputer.files[0] }
      });
    },
    //从派友选择
    chooseFriend() {
      this.$router.push({
        name: "piFriends"
      });
    },
    // 查看报告
    viewreport() {
      if (this.birthValue == "" || this.nickname == "") {
        Toast("请完善信息");
      } else {
        // this.$router.push({
        //     name:'codeReading'
        // })
        // origin  1 添加  2 匹配
        let parameter = {
          name: this.nickname,
          birthday: this.birthValue.split('-').join(''),
          sex: this.sex,
          origin: 1,
          born_time: this.timeValue,
          born_area: this.placeVal,
          born_latitude: this.lngAndLat.lat,
          born_longitude: this.lngAndLat.lng
        };

        this.$HTTP.add_friend(parameter).then(res => {
          console.log(res);
          Toast("已添加π友列表");
        });

      }
    }
  }
};
