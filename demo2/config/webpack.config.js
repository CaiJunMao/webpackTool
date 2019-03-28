//导入处理文件路径模块(nodejs 核心模块)
let path = require('path')
//__dirname：notejdsq全局变量，当前文件的绝对路径
console.log(__dirname)
//对外暴露
module.exports = {
	 //入口文件配置
   entry:{
      app: './app/app.js'
   },
     //输出文件配置
   output:{
   	//打包输出路径,必须是绝对路径
   		path:path.resolve(__dirname,'../public'),
   	 //打包文件输出名称, 输出文件名称和入口配置文件路径的键名如app一致
//   filename: '[name].js'
	//也能指定输出文件名
//	filename: 'a.js'
	//带有hash的文件名,唯一性
       filename: '[name].[hash].js'


   }
	

};
