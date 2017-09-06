import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
/*mint-ui js*/
const Toast=resolve=>{
	require.ensure([],()=>{
		resolve(require('@/components/js/Toast.vue'));
	},'Toast');
}
const Loadmore=resolve=>{
	require.ensure([],()=>{
		resolve(require('@/components/js/Loadmore.vue'));
	},'Loadmore');
}
const Infinitescroll=resolve=>{
	require.ensure([],()=>{
		resolve(require('@/components/js/Infinitescroll.vue'));
	},'Infinitescroll');
}
const Messagebox=resolve=>{
	require.ensure([],()=>{
		resolve(require('@/components/js/Messagebox.vue'));
	},'Messagebox');
}
const Actionsheet=resolve=>{
	require.ensure([],()=>{
		resolve(require('@/components/js/Actionsheet.vue'));
	},'Actionsheet');
}
const Popup=resolve=>{
	require.ensure([],()=>{
		resolve(require('@/components/js/Popup.vue'));
	},'Popup');
}
const Swipe=resolve=>{
	require.ensure([],()=>{
		resolve(require('@/components/js/Swipe.vue'));
	},'Swipe');
}
const Lazyload=resolve=>{
	require.ensure([],()=>{
		resolve(require('@/components/js/Lazyload.vue'));
	},'Lazyload');
}
const Range=resolve=>{
	require.ensure([],()=>{
		resolve(require('@/components/js/Range.vue'));
	},'Range');
}
const Progress=resolve=>{
	require.ensure([],()=>{
		resolve(require('@/components/js/Progress.vue'));
	},'Progress');
}
const Picker=resolve=>{
	require.ensure([],()=>{
		resolve(require('@/components/js/Picker.vue'));
	},'Picker');
}
const DatetimePicker=resolve=>{
	require.ensure([],()=>{
		resolve(require('@/components/js/DatetimePicker.vue'));
	},'DatetimePicker');
}
const Indexlist=resolve=>{
	require.ensure([],()=>{
		resolve(require('@/components/js/Indexlist.vue'));
	},'Indexlist');
}
const Paleteebutton=resolve=>{
	require.ensure([],()=>{
		resolve(require('@/components/js/Paleteebutton.vue'));
	},'Paleteebutton');
}
/*mint-ui css*/
const Header=resolve=>{
	require.ensure([],()=>{
		resolve(require('@/components/css/Header.vue'));
	},'Header');
}
const Tabbar=resolve=>{
	require.ensure([],()=>{
		resolve(require('@/components/css/Tabbar.vue'));
	},'Tabbar');
}
const Navbar=resolve=>{
	require.ensure([],()=>{
		resolve(require('@/components/css/Navbar.vue'));
	},'Navbar');
}
const Button=resolve=>{
	require.ensure([],()=>{
		resolve(require('@/components/css/Button.vue'));
	},'Button');
}
const Cell=resolve=>{
	require.ensure([],()=>{
		resolve(require('@/components/css/Cell.vue'));
	},'Cell');
}
const Cellswipe=resolve=>{
	require.ensure([],()=>{
		resolve(require('@/components/css/Cellswipe.vue'));
	},'Cellswipe');
}
const Search=resolve=>{
	require.ensure([],()=>{
		resolve(require('@/components/css/Search.vue'));
	},'Search');
}
const Spinner=resolve=>{
	require.ensure([],()=>{
		resolve(require('@/components/css/Spinner.vue'));
	},'Spinner');
}
const Tabcontainer=resolve=>{
	require.ensure([],()=>{
		resolve(require('@/components/css/Tabcontainer.vue'));
	},'Tabcontainer');
}
/*mint-ui form*/
const Switch=resolve=>{
	require.ensure([],()=>{
		resolve(require('@/components/form/Switch.vue'));
	},'Switch');
}
const Checklist=resolve=>{
	require.ensure([],()=>{
		resolve(require('@/components/form/Checklist.vue'));
	},'Checklist');
}
const Radio=resolve=>{
	require.ensure([],()=>{
		resolve(require("@/components/form/Radio.vue"));
	},"Radio")
}
const Field=resolve=>{
	require.ensure([],()=>{
		resolve(require("@/components/form/Field.vue"));
	},"Field")
}
const Badge=resolve=>require.ensure([],()=>resolve(require('@/components/form/Badge.vue')),"Badge");

//require.ensure 分割代码块
const Homepage=resolve=>require.ensure([],()=>resolve(require('@/components/Homepage.vue')),'Homepage');
// 在大型应用程序中，我们可能需要将应用程序分成更小的块，只在实际需要时从服务器加载组件。
//为了使这更容易，Vue公司允许你定义你的组件作为一个工厂函数异步解决你的组件定义。
//Vue公司只会触发厂功能组件时，实际上需要被渲染，将为今后的重新渲染结果缓存。
//工厂函数接收一个解析回调，当您从服务器检索组件定义时，应该调用它。

export default new Router({
  routes: [
  	{
  		path:'/',
  		name:'homepage',
  		component:Homepage
  	},
    {
      path: '/Toast',
      name: 'Toast',
      component:Toast
    },
    {
      path: '/Loadmore',
      name: 'Loadmore',
      component:Loadmore
    },
    {
      path: '/Infinitescroll',
      name: 'Infinitescroll',
      component:Infinitescroll
    },
    {
      path: '/Messagebox',
      name: 'Messagebox',
      component:Messagebox
    },
    {
      path: '/Actionsheet',
      name: 'Actionsheet',
      component:Actionsheet
    },
    {
      path: '/Popup',
      name: 'Popup',
      component:Popup
    },
    {
      path: '/Swipe',
      name: 'Swipe',
      component:Swipe
    },
    {
      path: '/Lazyload',
      name: 'Lazyload',
      component:Lazyload
    },
    {
      path: '/Range',
      name: 'Range',
      component:Range
    },
    {
      path: '/Progress',
      name: 'Progress',
      component:Progress
    },
    {
      path: '/Picker',
      name: 'Picker',
      component:Picker
    },
    {
      path: '/DatetimePicker',
      name: 'DatetimePicker',
      component:DatetimePicker
    },
    {
      path: '/Indexlist',
      name: 'Indexlist',
      component:Indexlist
    },
    {
      path: '/Paleteebutton',
      name: 'Paleteebutton',
      component:Paleteebutton
    },
    {
      path: '/Header',
      name: 'Header',
      component:Header
    },
    {
      path: '/Tabbar',
      name: 'Tabbar',
      component:Tabbar
    },
    {
      path: '/Navbar',
      name: 'Navbar',
      component:Navbar
    },
    {
      path: '/Button',
      name: 'Button',
      component:Button
    },
    {
      path: '/Cell',
      name: 'Cell',
      component:Cell
    },
    {
      path: '/Cellswipe',
      name: 'Cellswipe',
      component:Cellswipe
    },
    {
      path: '/Search',
      name: 'Search',
      component:Search
    },
    {
      path: '/Spinner',
      name: 'Spinner',
      component:Spinner
    },
    {
      path: '/Tabcontainer',
      name: 'Tabcontainer',
      component:Tabcontainer
    },
    {
    	path:'/Switch',
    	name:'Switch',
    	component:Switch
    },
    {
    	path:'/Checklist',
    	name:"Checklist",
    	component:Checklist
    },
    {
    	path:"/Radio",
    	name:"Radio",
    	component:Radio
    },
    {
    	path:"/Field",
    	name:"Field",
    	component:Field
    },
    {
    	path:"/Badge",
    	name:"Badge",
    	component:Badge
    }
  ]
});
