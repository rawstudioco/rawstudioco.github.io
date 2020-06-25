(function($) {

  // Increment Quantity
  function incrementQuantity() {
    var incrementInputs = $('.increment-group')

    incrementInputs.each(function() {
      $this = $(this)

      var buttons = $this.find('.increment-button'),
          input = $this.find('.increment-input'),
          interval = input.data('interval') || 1,
          prefix = input.data('prefix') || '',
          upperLimit = input.data('upper-limit') || Infinity

      buttons.on('touchend click', function(e) {
        e.stopPropagation()
        e.preventDefault()

        var direction = $(this).data('direction'),
            currentVal = input.val().replace(/[^0-9\.\-]+/g, ''),
            newVal = 0

        if (isNaN(currentVal)) {
          input.val(prefix + '0')
        } else {

          if (direction === 'dec') {
            newVal = +currentVal - interval
          } else if (direction === 'inc') {
            newVal = +currentVal + interval
          }

          // Keep things positive
          newVal = (newVal > 0) ? newVal : 0

          // Don't exceed upper limits
          newVal = (newVal < upperLimit) ? newVal : upperLimit

          input.val(prefix + newVal)
        }
      })

    })
  } incrementQuantity();

  // Check fieldset
  function checkFieldset() {
    $('.check-fieldset').each(function() {
      var $this = $(this),
          checkbox = $this.find('.raw-checkbox');

      $(checkbox).on('click', function(){
        if ($(this).prop('checked')) {
          $this.removeClass('disabled');
        } else {
          $this.addClass('disabled');
        }
      });
    });
  } checkFieldset();

})(jQuery);


// ---------------- //
//      Charts      //
// ---------------- //

// Chart 1 (Horizontal)
var ctx = document.getElementById('chart1').getContext('2d');
var chart1 = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: ['Dispensary', 'Other Patient Order Systems', 'vital.ly Patient Orders'],
        datasets: [{
            data: [200, 125, 80, 0],
            backgroundColor: [
                'rgba(242, 150, 42, 0.2)',
                'rgba(242, 150, 42, 0.2)',
                'rgba(120, 32, 160, 0.2)',
            ],
            borderColor: [
                'rgba(242, 150, 42, 1)',
                'rgba(242, 150, 42, 1)',
                'rgba(120, 32, 160, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        layout: {
          padding: {
            right: 20
          }
        },
        scales: {
          xAxes: [{
              gridLines: {
                lineWidth: 0,
                color: '#E8E4EA',
                zeroLineColor: '#E8E4EA'
              },
              ticks: {
                  display: false
              }
          }],
          yAxes: [{
              gridLines: {
                display: false
              },
              ticks: {
                fontColor: '#847D88',
                fontSize: 12
              }
          }]
        },
        legend: {
            display: false,
        },
        tooltips: {
          callbacks: {
              title: function() {

              },
              label: function(tooltipItem, data) {
                  return "$" + tooltipItem.xLabel;
              }
            }
        }
    }
});

// Chart 2 (Pie Chart)
var ctx = document.getElementById('chart2').getContext('2d');
var chart2 = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Hours', 'Time'],
        datasets: [{
            data: [150, 210],
            backgroundColor: [
                'rgba(120, 32, 160, 0.2',
                '#F7F5F8'
            ],
            borderColor: [
                'rgba(120, 32, 160, 1)',
                'rgba(0, 0, 0, 0)',
            ],
            hoverBackgroundColor: [
              'rgba(120, 32, 160, 0.2',
              '#F7F5F8'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
          xAxes: [{
              gridLines: {
                display: false
              },
              ticks: {
                  display: false
              }
          }],
          yAxes: [{
              gridLines: {
                display: false
              },
              ticks: {
                display: false
              }
          }]
        },
        legend: {
            display: false,
        },
        tooltips: {
            enabled: false
        }
    }
});

// Chart 3 (Vertical)
var ctx = document.getElementById('chart3').getContext('2d');
var chart3 = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['RRP', 'vital.ly'],
        datasets: [{
            data: [200, 75],
            backgroundColor: [
                'rgba(242, 150, 42, 0.2)',
                'rgba(120, 32, 160, 0.2)',
            ],
            borderColor: [
                'rgba(242, 150, 42, 1)',
                'rgba(120, 32, 160, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        layout: {
          padding: {
            right: 20
          }
        },
        scales: {
          xAxes: [{
              barPercentage: 0.8,
              gridLines: {
                lineWidth: 0,
                color: '#E8E4EA',
                zeroLineColor: '#E8E4EA'
              },
              ticks: {
                color: '#463D4A',
                fontSize: 10,
              }
          }],
          yAxes: [{
              gridLines: {
                lineWidth: 0,
                color: '#E8E4EA',
                zeroLineColor: '#E8E4EA'
              },
              ticks: {
                fontColor: '#463D4A',
                fontSize: 10,
                beginAtZero: true,
                callback: function(value, index, values) {
                    return '$' + value;
                }
              }
          }]
        },
        legend: {
            display: false,
        },
        tooltips: {
          callbacks: {
              label: function(tooltipItem, data) {
                  return "$" + tooltipItem.yLabel;
              }
            }
        }
    }
});

// Chart 4 (Vertical)
var ctx = document.getElementById('chart4').getContext('2d');
var chart4 = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['vital.ly', 'Other Patient Orders'],
      datasets: [{
          label: 'Forgone Wages',
          data: [75, 100],
          backgroundColor: [
            'rgba(242, 150, 42, 0.2)',
            'rgba(242, 150, 42, 0.2)'
          ],
          borderColor: [
            'rgba(242, 150, 42, 1)',
            'rgba(242, 150, 42, 1)'
          ],
          borderWidth: 1
        },
        {
          label: 'Gross Revenue',
          data: [200, 125],
          backgroundColor: [
            'rgba(120, 32, 160, 0.2)',
            'rgba(120, 32, 160, 0.2)'
          ],
          borderColor: [
            'rgba(120, 32, 160, 1)',
            'rgba(120, 32, 160, 1)'
          ],
          borderWidth: 1
        }
      ]
    },
    options: {
      legend: {
        align: 'center',
        labels: {
                fontColor: '#463D4A',
                fontSize: 10,
                boxWidth: 11
            }
      },
        layout: {
          padding: {
            right: 20
          }
        },
        scales: {
          xAxes: [{
              stacked: true,
              barPercentage: 0.8,
              gridLines: {
                lineWidth: 0,
                color: '#E8E4EA',
                zeroLineColor: '#E8E4EA'
              },
              ticks: {
                color: '#463D4A',
                fontSize: 10,
              }
          }],
          yAxes: [{
              stacked: true,
              gridLines: {
                lineWidth: 0,
                color: '#E8E4EA',
                zeroLineColor: '#E8E4EA'
              },
              ticks: {
                fontColor: '#463D4A',
                fontSize: 10,
                beginAtZero: true,
                callback: function(value, index, values) {
                    return '$' + value;
                }
              }
          }]
        },
        tooltips: {
          callbacks: {
              label: function(tooltipItem, data) {
                  return "$" + tooltipItem.yLabel;
              }
            }
        }
    }
});
