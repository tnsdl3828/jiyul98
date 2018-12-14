$(document).ready(function(){
        $('#btncollapzion').Collapzion({
            _main_btn_color:'rgba(0,0,0,0.5);',
            _child_btn_color:'#000;',
             _pos: {
            'width':'100%',
            'min-height':'20%',
            'position':'fixed',
            'right':'0',
            'left': '-20px',
            'bottom': '-60px',
            'text-align':'center',
            'padding': '0px 8px',
            'display':'block',
            'margin-bottom':'34px'
          },
             _child_attribute:[
            {
              'label':'',
              'url':'#',    
              'icon':'&#xE7FD;',
                'onclick':'fnMove(1)',
            },
            {
            'label':'',
            'url':'#',
            'icon':'&#xE150;',
            'onclick':'fnMove(3)',
            },
            {
            'label':'',
            'url':'#',
            'icon':'&#xE873;',
                'onclick':'fnMove(4)',
            },
            {
            'label':'',
            'url':'#',
            'icon':'<img src="images/top_btn.png">',
                'onclick':'fnMove(5)',
            },
          ]
        });
        
        $( window ).resize(function() {
            var resize = $(window).width();
            if(resize > 768){                $('#btncollapzion').css('display','none')
            }else{
             $('#btncollapzion').css('display','block')   
            }
        }).resize();  
    })