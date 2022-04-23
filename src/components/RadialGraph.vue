<template>
  <div id="chart">
        <apexchart type="radialBar" height="300" :options="chartOptions" :series="series"></apexchart>
      </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'
// import {mapGetters} from 'vuex'
export default {
    components: {
          apexchart: VueApexCharts,
        },
        props:["getA","getB","getC"],
        data: function() {
          return{
          series: [this.getA, this.getB, this.getC],
          chartOptions: {
            chart: {
              height: 300,
              type: 'radialBar',
            },
            plotOptions: {
              radialBar: {
                offsetY: 0,
                startAngle: 0,
                endAngle: 270,
                hollow: {
                  margin: 5,
                  size: '30%',
                  background: 'transparent',
                  image: undefined,
                },
                dataLabels: {
                  name: {
                    show: false,
                  },
                  value: {
                    show: false,
                  }
                }
              }
            },
            colors: ['#1ab7ea', '#0084ff', '#39539E'],
            labels: ['Bloco A', 'Bloco B', 'Bloco C'],
            legend: {
              show: true,
              floating: true,
              fontSize: '16px',
              position: 'left',
              offsetX: 20,
              offsetY: 15,
              labels: {
                useSeriesColors: true,
              },
              markers: {
                size: 0
              },
              formatter: function(seriesName, opts) {
                return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
              },
              itemMargin: {
                vertical: 3
              }
            },
            responsive: [{
              breakpoint: 350,
              options: {
                legend: {
                    show: false
                }
              }
            }]
          },
          
          
        }
        
          
        },
        watch: {
            getA: {
              handler: function (getA) {

                this.series[0] = getA
              },
                immediate: true 
            },
            getB: {
              handler: function (getB) {

                this.series[1] = getB
              },
                immediate: true 
            },
            getC: {
              handler: function (getC) {

                this.series[2] = getC
              },
                immediate: true 
            }

      },
        
        
}
</script>

<style>

</style>