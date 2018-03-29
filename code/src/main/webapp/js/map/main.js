;(function() {
	
  var dom = document.getElementById('container')
  var myChart = echarts.init(dom)
  var data = [
		{ code: 220000, name: '吉林', value: 1100, itemStyle: { emphasis: { areaColor: 'yellow' } }},
	    { code: 440000, name: '广东', value: 750, itemStyle: { emphasis: { areaColor: 'yellow' } }},
	    { code: 650000, name: '新疆', value: 100, itemStyle: { emphasis: { areaColor: 'yellow' } } },
	    { code: 540000, name: '西藏', value: 150, itemStyle: { emphasis: { areaColor: 'yellow' } } },
	    { code: 630000, name: '青海', value: 200, itemStyle: { emphasis: { areaColor: 'yellow' } } },
	    { code: 620000, name: '甘肃', value: 850, itemStyle: { emphasis: { areaColor: 'yellow' } } },
	    { code: 510000, name: '四川', value: 1250, itemStyle: { emphasis: { areaColor: 'yellow' } } },
	    { code: 530000, name: '云南', value: 500, itemStyle: { emphasis: { areaColor: 'yellow' } } },
	    { code: 640000, name: '宁夏', value: 400, itemStyle: { emphasis: { areaColor: 'yellow' } } },
	    { code: 500000, name: '重庆', value: 1450, itemStyle: { emphasis: { areaColor: 'yellow' } } },
	    { code: 520000, name: '贵州', value: 350, itemStyle: { emphasis: { areaColor: 'yellow' } } },
	    { code: 610000, name: '陕西', value: 550, itemStyle: { emphasis: { areaColor: 'yellow' } } },
	    { code: 450000, name: '广西', value: 600, itemStyle: { emphasis: { areaColor: 'yellow' } } },
	    { code: 150000, name: '内蒙古', value: 650, itemStyle: { emphasis: { areaColor: 'yellow' } } },
	    { code: 140000, name: '山西', value: 900, itemStyle: { emphasis: { areaColor: 'yellow' } } },
	    { code: 410000, name: '河南', value: 1050, itemStyle: { emphasis: { areaColor: 'yellow' } } },
	    { code: 420000, name: '湖北', value: 1500, itemStyle: { emphasis: { areaColor: 'yellow' } } },
	    { code: 430000, name: '湖南', value: 250, itemStyle: { emphasis: { areaColor: 'yellow' } } },
	    { code: 130000, name: '河北', value: 1200, itemStyle: { emphasis: { areaColor: 'yellow' } } },
	    { code: 110000, name: '北京', value: 350, itemStyle: { emphasis: { areaColor: 'yellow' } } },
	    { code: 120000, name: '天津', value: 1000, itemStyle: { emphasis: { areaColor: 'yellow' } } },
	    { code: 230000, name: '黑龙江', value: 1050, itemStyle: { emphasis: { areaColor: 'yellow' } } },
	
	    { code: 210000, name: '辽宁', value: 1150, itemStyle: { emphasis: { areaColor: 'yellow' } } },
	    { code: 370000, name: '山东', value: 300, itemStyle: { emphasis: { areaColor: 'yellow' } } },
	    { code: 340000, name: '安徽', value: 1300, itemStyle: { emphasis: { areaColor: 'yellow' } } },
	    { code: 320000, name: '江苏', value: 1400, itemStyle: { emphasis: { areaColor: 'yellow' } } },
	    { code: 310000, name: '上海', value: 450, itemStyle: { emphasis: { areaColor: 'yellow' } } },
	    { code: 330000, name: '浙江', value: 1200, itemStyle: { emphasis: { areaColor: 'yellow' } } },
	    { code: 360000, name: '江西', value: 150, itemStyle: { emphasis: { areaColor: 'yellow' } } },
	    { code: 350000, name: '福建', value: 800, itemStyle: { emphasis: { areaColor: 'yellow' } } },
	    { code: 710000, name: '台湾', value: 1650, itemStyle: { emphasis: { areaColor: 'yellow' } } },
	    { code: 460000, name: '海南', value: 1700, itemStyle: { emphasis: { areaColor: 'yellow' } } },
	    { code: 820000, name: '澳门', value: 1800, itemStyle: { emphasis: { areaColor: 'yellow' } } },
	    { code: 810000, name: '香港', value: 1850, itemStyle: { emphasis: { areaColor: 'yellow' } } }
  ]

  function getSeries(name) {
    for (var i = 0; i < data.length; i++) {
      data[i].selected = data[i].name === name
    }
    return [
      {
        name: '中国',
        type: 'map',
        mapType: 'china',
        // selectedMode : 'multiple',
        label: {
          normal: {
            show: true
          },
          emphasis: {
            show: true
          }
        },
        itemStyle: {
            normal: {
              color: 'transparent'
            },
            emphasis: {
              areaColor: '#fff'
            }
          },
        data: data
      }
    ]
  }

  function initMap() {
	  var app = {}
	    var option = {
	      title: {
	        text: '入组医院',
	        left: 'center',
	        padding: [50, 0, 0, 0]
	      },
	      tooltip: {
	        trigger: 'item',
	        formatter: '{b}'
	      },
	      label: {
	        normal: {
	          show: true
	        },
	        emphasis: {
	          show: true
	        }
	      },
	    }

	    myChart.setOption(option, true)
	    window.mapTab = 'hospital'
    	myChart.on('click', function(params) {
	      window.mapTab = 'hospital'
	      $('.map-tab').removeClass('active')
	      $('.map-tab:eq(0)').addClass('active')
	      onChartClick(params)
	    })
	    onChartClick({
	      data: data[0]
	    })
  }
  
  $('.map-tab').click(function() {
    $('.map-tab').removeClass('active')
    $(this).addClass('active')
    window.mapTab = $(this).data('tab')
    console.log(window.mapTab)
    onChartClick(window.mapParams)
  })
  
  function onChartClick(params){
	  window.mapParams = params
	  document.getElementById('main-title').innerHTML = params.data.name
	  /*$.ajax({
		url:"provenceInfoTrain.action",
		success:function(result){
			var msg = JSON.parse(result)
			var $listInfo = document.getElementById('list-info')
					
			var data =  msg[window.mapTab]
			if (data && data.length > 0) {
		        var htmlstr = ''
		        for (var i = 0; i < data.length; i++) {
		          htmlstr += '<p title="'+ data[i] +'">'+ data[i] +'</p>'
		        }
		        $listInfo.innerHTML = htmlstr
		      } else {
		        $listInfo.innerHTML = '暂无数据'
		      }
	
			myChart.setOption(
			{
				series: getSeries(params.data.name),
		        visualMap: {
		          min: 0,
		          max: 1850,
		          show: false,
		          inRange: {
		            color: ['#e0ffff', '#006edd']
		          },
		        },
			},
			true
		  )
		},
		dataType:"json",
		type: "GET",
		data: {"provenceCode":params.data.code},
		error: function(xhr,status,error){
			document.getElementById('list-info').innerHTML = '暂无数据';
			myChart.setOption(
				{
				  series: getSeries(params.data.name)
				},
				true
			)
		}
	   });*/
	  
  }

  initMap()
})()
