/*

    Copyright (c) NAWL
    NAWL - Not Another Web-Widget Library
    Written by ghgltggamer for developing out stading web apps or native desktop apps with lxnative.
    This is under the MIT LICENSE protection layer
    Contributions are open for everyone, may be you could be the next.

*/


// source code starts from here

// I will drop a tutorial for every widget with comments


// this function will create an empty nawl widget which is the base for every widget present in nawl even you can use this function to define your own widget types.
function NAWL_Widget(default_element='div', css_class='nawl-light-theme', secondary_element=default_element){
    var Widget = document.createElement(default_element);
    Widget.classList.add(css_class);
    Widget.classList.add('nawl-widget');
    return {
        widget: Widget,
        widget_classes: Widget.classList,
        widget_id: Widget.id,
        html_mode: 1110,
        jnode_mode: 1001,

        add(javascript_node_element){
            javascript_node_element.classList.add('nawl-widget-child');
            Widget.appendChild(javascript_node_element);
        },
        add_Html(html_node_element){
            var element = document.createElement(secondary_element);
            // element.classList.add('nawl-widget-child');
            element.innerHTML = html_node_element;
            this.add(element);
        },
        add_Many(list_of_javascript_node_elements=[]){
            for (var i = 0;i < list_of_javascript_node_elements.length;i++){
                this.add(list_of_javascript_node_elements[i])
            }
        },
        add_Html_Many(list_of_javascript_node_elements=[]){
            for (var i = 0;i < list_of_javascript_node_elements.length;i++){
                this.add_Html(list_of_javascript_node_elements[i])
            }
        },
        remove(index){
            var children = Widget.querySelectorAll('.nawl-widget-child');
            children[index].remove();
        },
        clean(){
            Widget.innerHTML = "";
        },
        clear(){
            var children = Widget.querySelectorAll('.nawl-widget-child');
            for (var i = 0;i < children.length;i++){
                children[i].remove();
            }
        },
        content(content, mode=NAWL_Widget().html_mode){
            if (mode === NAWL_Widget().html_mode){
                Widget.innerHTML = content;
            }
            else if (mode === NAWL_Widget().jnode_mode){
                Widget.appendChild(content);
            }
            else {
                console.log('Invalid mode passed to NAWL_Widget().content() `'+mode+'` did you mean NAWL_Widget().html_mode or NAWL_Widget().jnode_mode?');
            }
        },
        update_content(html_content){
            Widget.innerHTML += html_content;
        },
        get(index){
            return Widget.querySelectorAll('.nawl-widget-child')[index];
        },
        fetch(index){
            return Widget.querySelectorAll('.nawl-widget-child')[index].innerHTML;
        },
        render(parent=document.body){
            parent.appendChild(Widget);
        },
        del(){
            Widget.remove();
        },

        


        cache(){
            var Cache = document.createElement('cache');
            Cache.style.display = 'none';
            Widget.appendChild(Cache);
            return {
                add(_data){
                    var element = document.createElement('div');
                    element.classList.add('nawl-cache-data');
                    element.innerHTML = _data;
                    Cache.appendChild(element);
                },
                add_Many(_data=[]){
                    for (var i = 0;i < _data.length;i++){
                        var element = document.createElement('div');
                        element.classList.add('nawl-cache-data');
                        element.innerHTML = _data[i];
                        Cache.appendChild(element);
                    }
                },
                get(index){
                    return Cache.querySelectorAll('.nawl-cache-data')[index];
                },
                fetch(index){
                    return Cache.querySelectorAll('.nawl-cache-data')[index].innerHTML;
                },
                remove(index){
                    Cache.querySelectorAll('.nawl-cache-data')[index].remove;
                },
                clear(){
                    Cache.innerHTML = '';
                },
                del(){
                    Cache.remove();
                },
                data(){
                    return Cache.innerHTML
                },
                transferCache(parent=Widget){
                    parent.innerHTML += this.data();
                }
            }
        }
    }
}




// default theming options
var NAWL_Button_Class = 'nawl-button-widget';
var NAWL_Input_Class = 'nawl-input-widget';
var NAWL_Container_Class = 'nawl-container-widget';





function NAWL_Button(_label='NAWL Button', _icon=null){
    var widget = NAWL_Widget();
    var button = document.createElement('button');
    button.classList.add('nawl-button');
    button.classList.add(NAWL_Button_Class);
    if (_icon != null){
        var img = document.createElement('img');
        img.src = _icon;
        img.style.width = '17px';
        img.style.marginRight = '6px';
        button.appendChild(img);
    }
    button.innerHTML += _label;
    widget.add(button);
    return {
        widget,
        main: button,
        label(new_label){
            this.main.innerText = new_label;
        }
    };
}








function NAWL_Theme_Button(_label='NAWL Button', _icon=null){
    var widget = NAWL_Widget();
    var button = document.createElement('button');
    button.classList.add('nawl-theme-button');
    button.classList.add(NAWL_Button_Class);
    if (_icon != null){
        var img = document.createElement('img');
        img.src = _icon;
        img.style.width = '17px';
        img.style.marginRight = '6px';
        button.appendChild(img);
    }
    button.innerHTML += _label;
    widget.add(button);
    return {
        widget,
        main: button,
        label(new_label){
            this.main.innerText = new_label;
        }
    };
}








function NAWL_Input(_placeholder='NAWL Input', _type='text'){
    var widget = NAWL_Widget();
    var input = document.createElement('input');
    input.classList.add('nawl-input');
    input.classList.add(NAWL_Input_Class);
    input.placeholder = _placeholder;
    input.type = _type;
    widget.add(input);
    return {
        widget,
        main: input,
        placeholder(new_placeholder){
            this.main.placeholder = new_placeholder;
        },
        type(new_type){
            this.main.type = new_type;
        }
    };
}








function NAWL_Textbox(_placeholder='NAWL TextBox', _type='text'){
    var widget = NAWL_Widget();
    var input = document.createElement('textarea');
    input.classList.add('nawl-input');
    input.classList.add(NAWL_Input_Class);
    input.placeholder = _placeholder;
    input.type = _type;
    widget.add(input);
    return {
        widget,
        main: input,
        placeholder(new_placeholder){
            this.main.placeholder = new_placeholder;
        },
        type(new_type){
            this.main.type = new_type;
        }
    };
}






function NAWL_Pixel(integer){
    return (integer+'px');
}
function NAWL_Container(height=300, width=300){
    var widget = NAWL_Widget();
    var container = document.createElement('div');
    container.classList.add('nawl-container');
    container.classList.add(NAWL_Container_Class);
    container.style.height = NAWL_Pixel(height);
    container.style.width = NAWL_Pixel(width);
    widget.add(container);
    return {
        widget,
        main: container,
        add(_widget){
            container.appendChild(_widget.main);
        },
        add_Many(_widgets=[]){
            for (var i = 0;i < _widgets.length;i++){
                this.add(_widgets[i])
            }
        }
    };
}



function NAWL_Dynamic_Container(){
    var widget = NAWL_Widget();
    var container = document.createElement('div');
    container.classList.add('nawl-dynamic-container');
    container.classList.add(NAWL_Container_Class);
    // container.style.minHeight = NAWL_Pixel(height);
    // container.style.minWidth = NAWL_Pixel(width);
    // container.style.maxHeight = NAWL_Pixel(999999);
    // container.style.maxWidth = NAWL_Pixel(999999);
    widget.add(container);
    return {
        widget,
        main: container,
        add(_widget){
            container.appendChild(_widget.main);
        },
        add_Many(_widgets=[]){
            for (var i = 0;i < _widgets.length;i++){
                this.add(_widgets[i])
            }
        }
    };
}






function NAWL_Card(height=300, width=200, icon=null){
    var widget = NAWL_Widget();
    var container = document.createElement('div');
    container.classList.add('nawl-card');
    if (icon != null){
        var center = document.createElement('center');
        var image_icon = document.createElement('img');
        image_icon.src = icon;
        image_icon.style.width = '95%';
        center.appendChild(image_icon);
        container.appendChild(center);
    }
    container.classList.add(NAWL_Container_Class);
    container.style.height = NAWL_Pixel(height);
    container.style.width = NAWL_Pixel(width);
    widget.add(container);
    return {
        widget,
        main: container,
        add(_widget){
            container.appendChild(_widget.main);
        },
        add_Many(_widgets=[]){
            for (var i = 0;i < _widgets.length;i++){
                this.add(_widgets[i])
            }
        },
        label(label, centered=true){
            if (centered){
                var center = document.createElement('center');
                center.innerHTML += label;
                container.appendChild(center);
            }
            else{
                container.innerHTML += label;
            }
        }
    };
}






function NAWL_TextEdit(_title='NAWL TextEdit', _text='NAWL TextEdit', height=300, width=300){
    var widget = NAWL_Widget();
    var container = document.createElement('div');
    container.classList.add('nawl-textedit');
    container.classList.add(NAWL_Container_Class);
    container.style.height = NAWL_Pixel(height);
    container.style.width = NAWL_Pixel(width);
    var title_bar = document.createElement('div');
    title_bar.style.height = '30px';
    title_bar.style.width = '95%';
    title_bar.style.display = 'flex';
    title_bar.style.alignItems = 'center';
    title_bar.innerText = _title;
    var title_bar_copy = document.createElement('button');
    title_bar_copy.classList.add('nawl-textedit-button');
    // title_bar_copy.style.left = NAWL_Pixel(container.style.width - 50);
    title_bar_copy.innerHTML = 'copy';
    title_bar.appendChild(title_bar_copy);
    var text_content = document.createElement('div');
    text_content.style.height = NAWL_Pixel(height - 30);
    text_content.style.width = NAWL_Pixel(widget - 20);
    text_content.style.paddingLeft = '10px';
    // text_content.style.backgroundColor = 'whitesmoke';
    // text_content.style.border = '1px solid silver';
    // text_content.style.borderRadius ='5px';
    text_content.classList.add('nawl-textedit-text');
    text_content.innerText += _text;
    container.appendChild(title_bar);
    container.appendChild(text_content);
    widget.add(container);
    // event management
    title_bar_copy.addEventListener('click', ()=>{
        NAWL_Core().copyToClipboard(text_content.innerText);
    })
    return {
        widget,
        main: container,
        text(_text_new=null){
            if (_text_new == null){
                return text_content.innerText;
            }
            else{
                text_content.innerText = _text_new;
            }
        }
    };
}








function NAWL_Break(){
    var element = document.createElement('br');
    return {
        main: element
    }
}

function NAWL_VSpacer(times=1){
    var element = document.createElement('div');
    element.style.height = NAWL_Pixel(times);
    return {
        main: element
    }
}

function NAWL_HSpacer(times=1){
    var element = document.createElement('div');
    element.style.width = NAWL_Pixel(times);
    return {
        main: element,
    }
}



function NAWL_Current_Spacer(times=1){
    for (var i = 0;i < times;i++){
        document.body.innerHTML += '<br>';
    }
}



function NAWL_Render(widget){
    document.body.appendChild(widget.main);
}






// events
function NAWL_Event(widget, event, callback){
    widget.main.addEventListener(event, ()=>{callback()});
}

function NAWL_Callback(func){
    func();
}





var NAWL_CURRENT_THEME = 'nawl-dark';
function NAWL_Set_Theme(theme){
    // var themer = document.querySelectorAll(`.${NAWL_CURRENT_THEME}`);
    // for (var i = 0;i < themer.length;i++){
    //     themer[i].classList.add(theme);
    //     themer[i].classList.remove(NAWL_CURRENT_THEME);
    // }
    // NAWL_CURRENT_THEME = theme;
    document.body.classList.add(theme);
    document.body.classList.remove(NAWL_CURRENT_THEME);
    NAWL_CURRENT_THEME = theme;
}

NAWL_Set_Theme('nawl-light');








// core function
function NAWL_Core(){
    return {
        copyToClipboard(text) {
            const textarea = document.createElement('textarea');
            textarea.value = text;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
            console.log('Text copied to clipboard');
        }
        
        // Usage
        // copyToClipboard('Hello, World!');
        
    }
}