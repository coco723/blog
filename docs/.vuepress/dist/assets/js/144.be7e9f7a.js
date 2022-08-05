(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{540:function(e,a,t){"use strict";t.r(a);var s=t(2),n=Object(s.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"ffmpeg音视频处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ffmpeg音视频处理"}},[e._v("#")]),e._v(" ffmpeg音视频处理")]),e._v(" "),a("h2",{attrs:{id:"去除音视频中的视频"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#去除音视频中的视频"}},[e._v("#")]),e._v(" 去除音视频中的视频")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("ffmpeg -i ./1573535886182365.mp4 -map 0:0 -vcodec copy out.mp4\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h2",{attrs:{id:"去除音视频中的音频"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#去除音视频中的音频"}},[e._v("#")]),e._v(" 去除音视频中的音频")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("ffmpeg -i 1573535886182365.mp4 -vcodec copy -an 2.mp4\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h2",{attrs:{id:"视频拼接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#视频拼接"}},[e._v("#")]),e._v(" 视频拼接")]),e._v(" "),a("p",[e._v("mpg拼接（问题：拼接成功但只显示第一个）")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('ffmpeg -i "concat:video1.mpg|video2.mpg" -c copy output.mpg\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("拼接视频不一致的格式时，需要转码")]),e._v(" "),a("p",[e._v("例子：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('ffmpeg -i out11.mp4 -c copy -bsf:v h264_mp4toannexb -f mpegts intermediate1.ts\n\nffmpeg -i 2.mp4 -c copy -bsf:v h264_mp4toannexb -f mpegts intermediate2.ts\n\nffmpeg -i "concat:intermediate1.ts|intermediate2.ts" -c copy -bsf:a aac_adtstoasc output.mp4\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br")])]),a("h1",{attrs:{id:"截取音频"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#截取音频"}},[e._v("#")]),e._v(" 截取音频")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("ffmpeg -i out.mp4 -ss 00:10 -t 00:40 -acodec copy out1.mp4\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h2",{attrs:{id:"将图片转换成视频"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#将图片转换成视频"}},[e._v("#")]),e._v(" 将图片转换成视频")]),e._v(" "),a("ol",[a("li",[e._v("生成.mpg")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("ffmpeg -i image%3d.jpeg output.mpg\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("或")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("ffmpeg -f image2 -i image00%d.jpeg video.mpg\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[e._v("生成.mp4")])]),e._v(" "),a("p",[e._v("简单的生成")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("ffmpeg -i image%3d.jpeg -pix_fmt yuv420p a.mp4\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("-pix_fmt yuv420p")]),e._v(" "),a("p",[e._v("设定参数")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("ffmpeg -r 25 -loop 1 -i image%3d.jpeg -pix_fmt yuv420p -vcodec libx264 -b:v 600k -r:v 25 -preset medium -crf 30 -s 720x576 -vframes 250 -r 25 -t 3 a.mp4\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h1",{attrs:{id:"将多张图片合成视频"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#将多张图片合成视频"}},[e._v("#")]),e._v(" 将多张图片合成视频")]),e._v(" "),a("ol",[a("li",[e._v("带音频合成：")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("ffmpeg -threads 2 -y -r 1 -i image%3d.jpeg  -i audio.wav -pix_fmt yuv420p image.mp4\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("ul",[a("li",[e._v("-threads 2: 以两个县城进行运行，加快处理的速度")]),e._v(" "),a("li",[e._v("-y: 对输出文件进行覆盖")]),e._v(" "),a("li",[e._v("-r 10: fps设置为10帧/妙")]),e._v(" "),a("li",[e._v("-absf aac_adtstoasc：编码音频格式，使之能在一些设备上能播放")])]),e._v(" "),a("ol",[a("li",[e._v("不带音频合成")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("ffmpeg -loop 1 -f image2 -i image%3d.jpeg -pix_fmt yuv420p -vcodec libx264 -r 10 -t 10 output.mp4\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h2",{attrs:{id:"将一张图片做成视频封面"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#将一张图片做成视频封面"}},[e._v("#")]),e._v(" 将一张图片做成视频封面")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("ffmpeg -i 2.mp4 -i image1.png -map 0 -map 1 -c copy -c:v:1 png -disposition:v:1 attached_pic output_video.mp4\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h2",{attrs:{id:"在特定的时间显示图片"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在特定的时间显示图片"}},[e._v("#")]),e._v(" 在特定的时间显示图片")]),e._v(" "),a("p",[e._v("在0～5秒内显示图片,图片的x坐标为60，否则为-500(移出屏幕)，y坐标一直为50不变")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("ffmpeg -y -i 1573535886182365.mp4 -i t016e3f183704154203.jpg -filter_complex \"overlay=x='if(between(t,0,5),0,-5000)':y=0\" -f mp4 left3.mp4\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h2",{attrs:{id:"音频提前或延迟n秒"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#音频提前或延迟n秒"}},[e._v("#")]),e._v(" 音频提前或延迟N秒")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('ffmpeg -i 1573535886182365.mp4 -filter_complex "adelay=3000|3000" revideo.mp4\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h2",{attrs:{id:"合并音频视频或替换音频流"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#合并音频视频或替换音频流"}},[e._v("#")]),e._v(" 合并音频视频或替换音频流")]),e._v(" "),a("p",[e._v("如果输入的视频已经包含音频，并且想要替换它，需要告诉ffmpeg采取哪个音频流：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("ffmpeg -i output1.mp4 -i out.mp4  \\-c:v copy -c:a aac -strict experimental \\-map 0:v:0 -map  1:a:0 output2.mp4\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h2",{attrs:{id:"合并音频和视频-给音频重新编码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#合并音频和视频-给音频重新编码"}},[e._v("#")]),e._v(" 合并音频和视频，给音频重新编码")]),e._v(" "),a("p",[e._v("在这里，我们假定视频文件没有包含任何音频流，并且希望具有与输入格式相同的输出格式(此处为MP4)。")]),e._v(" "),a("p",[e._v("上述命令转码音频，因为MP4不能携带PCM音频流。如果需要，可以使用任何其他所需的音频编解码器")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("ffmpeg -i out.mp4 -i 2.mp4 \\-c:v copy -c:a aac -strict experimental output.mp4\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h2",{attrs:{id:"实例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实例"}},[e._v("#")]),e._v(" 实例")]),e._v(" "),a("ol",[a("li",[e._v("视频去除音频")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("ffmpeg -i v4.mp4 -vcodec copy -an dv2.mp4\n\nffmpeg -i v3.mp4 -vcodec copy -an dv1.mp4\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("ul",[a("li",[e._v("-i : filename输入文件")]),e._v(" "),a("li",[e._v("-vcodec：vcodec是 -codec:v的一个别称，强制使用codec 编解码方式，未设定时使用与输入流相同的编码器。如果用copy表示原始编解码数据必须被拷贝")]),e._v(" "),a("li",[e._v("-an: 不使用音频记录")])]),e._v(" "),a("ol",[a("li",[e._v("拼接视频")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('ffmpeg -i dv1.mp4 -c copy -bsf:v h264_mp4toannexb -f mpegts intermediate1.ts\n\n\nffmpeg -i dv2.mp4 -c copy -bsf:v h264_mp4toannexb -f mpegts intermediate2.ts\n\n\nffmpeg -i "concat:intermediate1.ts|intermediate2.ts" -c:a copy -bsf:a aac_adtstoasc dv12.mp4\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br")])]),a("ul",[a("li",[e._v("-c[:stream_specifier] codec (input/output, per-stream)")])]),e._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[e._v("插入封面图片")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("ffmpeg -i dv12.mp4 -i image1.png -map 0 -map 1 -c copy -c:v:1 png -disposition:v:1 attached_pic idv12.mp4\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("ol",{attrs:{start:"4"}},[a("li",[e._v("合成音频")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("ffmpeg -i idv12.mp4  -i audio.wav \\-c:v copy -c:a aac -strict experimental chen.mp4\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h2",{attrs:{id:"管道pipe"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#管道pipe"}},[e._v("#")]),e._v(" 管道pipe")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("ffmpeg -f image2 -loop 1 -i img.jpg \\\n       -f s16le -ac 1 -ar 16k -i wd.pcm -t 6 \\\n       -f nut pipe: | \\\nffmpeg -i audio.mp3 \\\n       -i pipe: -i 1.mp4 \\\n       -i 2.mp4 -i 3.mp4 \\\n       -i 4.mp4 \\\n\t-filter_complex '[1:v]scale=720:1280[in1];\n                   [2:v]scale=720:1280[in2];\n                   [3:v]scale=720:1280[in3];\n                   [4:v]scale=720:1280[in4];\n                   [5:v]scale=720:1280[in5];\n                   [in1][in2][in3][in4][in5] concat=n=5:v=1:a=0 [v];\n                   [0:a][1:a] amix=inputs=2 [a]' \\\n\t-map '[v]' -map '[a]' -c:v libx264 -t 30 -f nut pipe: | \\\nffmpeg -i pipe: -i f.jpg \\\n       -map 0 -map 1 -c:v libx264 -c:a aac -c:v:1 png -disposition:v:1 attached_pic result.mp4\n\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br")])]),a("p",[e._v("相关资料：")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"http://ffmpeg.org/ffmpeg-all.html#Expression-Evaluation",target:"_blank",rel:"noopener noreferrer"}},[e._v("官网"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://vimsky.com/article/3687.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://vimsky.com/article/3687.html"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://www.longqi.cf/tools/2015/02/13/ffmpegcn/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://www.longqi.cf/tools/2015/02/13/ffmpegcn/"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"http://einverne.github.io/post/2015/12/ffmpeg-first.html#ffmpeg-usage",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://einverne.github.io/post/2015/12/ffmpeg-first.html#ffmpeg-usage"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://www.twblogs.net/a/5c9a26bfbd9eee434fc6c81b/zh-cn",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://www.twblogs.net/a/5c9a26bfbd9eee434fc6c81b/zh-cn"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://wklchris.github.io/FFmpeg.html#%E8%A7%86%E9%A2%91%E5%8F%82%E6%95%B0",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://wklchris.github.io/FFmpeg.html#%E8%A7%86%E9%A2%91%E5%8F%82%E6%95%B0"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/tonydeng/fmj/blob/master/ffmpeg.md#%e6%b7%bb%e5%8a%a0%e5%ad%97%e5%b9%95",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/tonydeng/fmj/blob/master/ffmpeg.md#%e6%b7%bb%e5%8a%a0%e5%ad%97%e5%b9%95"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://www.ancii.com/arzmnzdzz/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://www.ancii.com/arzmnzdzz/"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://www.jianshu.com/p/d6480c6ea6bd",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://www.jianshu.com/p/d6480c6ea6bd"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"http://trac.ffmpeg.org/wiki/Concatenate",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://trac.ffmpeg.org/wiki/Concatenate"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://www.linmao.dev/joy/868/#i-3",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://www.linmao.dev/joy/868/#i-3"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=n.exports}}]);