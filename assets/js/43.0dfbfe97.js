(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{451:function(a,v,t){"use strict";t.r(v);var e=t(2),_=Object(e.a)({},(function(){var a=this,v=a._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[v("h3",{attrs:{id:"集合概述"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#集合概述"}},[a._v("#")]),a._v(" 集合概述：")]),a._v(" "),v("ol",[v("li",[v("p",[a._v("集合集合的特点：一种容器，可以来容纳其他类型的数据")])]),a._v(" "),v("li",[v("p",[a._v("集合为什么说在开发中用的较多？ 集合是一个容器/载体")]),a._v(" "),v("p",[a._v("可以一次容纳多个对象，实际开发中，假设连接数据库，数据库中有10条数据被封装成10个Java对象，然后将10个Java对象放到一个集合中，将集合传到前端中，然后遍历，将数据一个个展现出来。")])]),a._v(" "),v("li",[v("p",[a._v("集合当中存储什么？集合当中不能存储基本数据类型，另外集合也不能直接存储Java对象，而是存储的Java对象的内存地址（引用）list.add(100)//自动装箱Integer")]),a._v(" "),v("p",[a._v("注意：集合在Java中本身是一个对象，也有一个内存地址。")])]),a._v(" "),v("li",[v("p",[a._v("在Java中，每一个不同的集合,底层会对应不同的数据结构，往不同的集合中存储元素，等于将数据放到了不同的数据结构当中。什么是数据结构？数据存储的结构就是数据结构。不同的数据结构，数据存储方式不同。例如："),v("br"),a._v("\n数组,二叉树,链表,哈希表"),v("br"),a._v("\n以上这些都是常见的数据结构。")]),a._v(" "),v("p",[a._v("使用不同的集合等同于使用了不同的数据结构")]),a._v(" "),v("p",[a._v("集合在java.util包下")])]),a._v(" "),v("li",[v("p",[a._v("需要掌握集合体系的继承结构，以及类图")])]),a._v(" "),v("li",[v("p",[a._v("在Java中集合分为两大类：")]),a._v(" "),v("ul",[v("li",[a._v("一类是单个方式存储元素；这一类集合的超级父接口：Java.util.Collection;")]),a._v(" "),v("li",[a._v("一类是以键值对的方式存储元素，这一类集合的超级父接口：java.util.Map")])])]),a._v(" "),v("li",[v("p",[a._v("总结：所有的实现类；")]),a._v(" "),v("ul",[v("li",[a._v("ArrayList:\t底层是数组")]),a._v(" "),v("li",[a._v("LinkedList:   底层是双向链表")]),a._v(" "),v("li",[a._v("Vector:      底层是数组，线程安全的，效率较低，使用较少")]),a._v(" "),v("li",[a._v("HashSet:   底层是HashMap,放到HashSet集合在的元素等同于放到HashMap集合key部分了")]),a._v(" "),v("li",[a._v("TreeSet:   底层是TreeMap,放到TreeSet中的元素等同于放到了TreeMap集合key部分了")]),a._v(" "),v("li",[a._v("HashMap: 底层哈希表")]),a._v(" "),v("li",[a._v("Hashtable:  底层哈希表，线程安全，使用较少")]),a._v(" "),v("li",[a._v("Properties:  是线程安全的，并且key和value必须是字符串类型的")]),a._v(" "),v("li",[a._v("TreeMap：底层是二叉树，TreeMap中的key可以自动按大小写进行排序。")])])]),a._v(" "),v("li",[v("p",[a._v("List集合存储元素特点：")]),a._v(" "),v("ul",[v("li",[a._v("有序可重复，有序是指，存进去的顺序和取出的顺序相同，每一个元素都有下标。")])])]),a._v(" "),v("li",[v("p",[a._v("Set(Map)集合存储元素特点：")]),a._v(" "),v("ul",[v("li",[a._v("无序不可重复，元素无下标")])])]),a._v(" "),v("li",[v("p",[a._v("SortedSet(SortedMap)集合存储元素特点：")])])]),a._v(" "),v("ul",[v("li",[a._v("首先无序不可重复，但是Sorted集合中的元素是可排序的。")])]),a._v(" "),v("ol",{attrs:{start:"11"}},[v("li",[a._v("Map集合中的key就是一个Set集合，往Set集合中放数据，实际上放到了Map集合的key部分。")])]),a._v(" "),v("h3",{attrs:{id:"迭代器执行原理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#迭代器执行原理"}},[a._v("#")]),a._v(" 迭代器执行原理")]),a._v(" "),v("h3",{attrs:{id:"集合最主要掌握内容"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#集合最主要掌握内容"}},[a._v("#")]),a._v(" 集合最主要掌握内容")]),a._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[a._v("1. 每一个集合对象的创建\n2. 向集合中添加元素\n3. 从集合中取出某个元素\n4. 遍历集合\n5. 主要集合类：\n - ArrrayList\n - LinkedList\n - HashSet\n - TreeSet\n - HashMap\n - Properties\n - TreeMap\n")])])])])}),[],!1,null,null,null);v.default=_.exports}}]);