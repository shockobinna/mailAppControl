<template>

  <div id="chart">
  
      <apexchart type="radialBar" height="350" :options="chartOptions" :series= this.series ></apexchart>
    
  </div>
  
</template>

<script>
import VueApexCharts from 'vue-apexcharts'
// import {mapGetters} from "vuex"
export default {
components: {
          apexchart: VueApexCharts,
        },
        props:['getTotal'],
        
        data: function() {
          return{
          series: [this.getTotal],
          chartOptions: {
            chart: {
              height: 350,
              type: 'radialBar',
              
            },
            plotOptions: {
              radialBar: {
                dataLabels: {
                name: {
                  show: true,
                },
                value:{
                   show: true,
                    formatter: function (val) {
                    return val 
                  }
                },
                total: {
                  show: true,
                  label: 'Encomendas',
                  formatter: function (w) {
                    return w.globals.seriesTotals.reduce((a, b) => {
                      return a + b
                    }, 0) / w.globals.series.length 
                  }
                },
                
              }
                
              },
            },
            fill: {
                colors: [function({ value }) {
                    if(value < 12) {
                        return '#7E36AF'
                    } else if (value >= 55 && value < 80) {
                        return '#164666'
                    } else {
                        return '#D9534F'
                    }
                }],
            },
           
          },
          
        }
         
        },
        
  
    
    
        mounted() {
          // this.series[0] = this.getTotal
          this.$nextTick(() => {
        window.dispatchEvent(new Event('resize'));
    });
          
        },
    
        
        watch: {
            getTotal: {
              handler: function (getTotal) {

                this.series[0] = getTotal
              },
                immediate: true 
            }
      },

// methods: {
//   forceRender() {
//       this.componentKey += 1;
//     },
// },

        
}
</script>

<style>

</style>

