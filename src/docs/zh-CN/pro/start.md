<script>
 import Wuui from 'wuui'
 export default {
	 data () {
		 return {
			 version: Wuui.version
		 }
	 }
 }
</script>


<wu-row>
 <wu-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
 	<img src="../../../assets/images/pro.png">
 </wu-col>
 <wu-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="start-right">
	 <h1 align="center">Wuui Pro</h1>
	 <div align="center">
	 	<p>开箱即用的中台前端/设计解决方案。</P>
	 	<div>
	 		<a href="http://wusihe.com/pro/#/home">
				<wu-button size="large" type="primary">预览</wu-button>
			</a>
			<a href="http://wusihe.com/pro/#/home">
				<wu-button size="large" >GITHUB</wu-button>
			</a>
	 </div>
	 </div>
 </wu-col>
</wu-row>


</div>


<style>
.start-right {
  padding-top: 80px
}
</style>