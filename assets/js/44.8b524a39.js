(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{453:function(t,a,s){"use strict";s.r(a);var n=s(2),v=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"封装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#封装"}},[t._v("#")]),t._v(" 封装")]),t._v(" "),a("ul",[a("li",[t._v("不在对外暴露复杂的数据，封装起来，对外只提供简单的操作入口，优点：数据安全，调用方便，外部不能随意访问，")])]),t._v(" "),a("h3",{attrs:{id:"如何封装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何封装"}},[t._v("#")]),t._v(" 如何封装")]),t._v(" "),a("ul",[a("li",[t._v("属性私有化,对实例变量添private修饰符")]),t._v(" "),a("li",[t._v("一个属性对应setter和getter方法，外部只能通过这两个方法来访问属性值，在方法体中还可以设定if语句来判定输入的数据是否合法。")])]),t._v(" "),a("h3",{attrs:{id:"getter-setter方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getter-setter方法"}},[t._v("#")]),t._v(" getter/setter方法")]),t._v(" "),a("ul",[a("li",[t._v("getter方法：public 返回值类型 get+ 属性名首字母大写(无参) {return xxx;}")]),t._v(" "),a("li",[t._v("setter方法：public 返回值类型 set+属性名首字母大写(1个参数) {xxx = 参数;}。get/set方法必须是实例方法，不能是静态方法。")])]),t._v(" "),a("h2",{attrs:{id:"继承"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#继承"}},[t._v("#")]),t._v(" 继承")]),t._v(" "),a("ul",[a("li",[t._v("子类继承父类，将父类的非私有属性和方法继承给子类，实现代码复用。")]),t._v(" "),a("li",[t._v("被继承的类叫父类，继承者为子类，Java中只能单继承")]),t._v(" "),a("li",[t._v("Java中有间接继承的效果，A类继承B类，B类继承C类，则A类间接继承C类")]),t._v(" "),a("li",[t._v("子类继承父类，除了构造方法之外其他的都可以继承，但是在父类(private)私有的属性和方法在子类不能直接访问,可以通过间接方式来访问。用父类的getter获得父类的私有属性")]),t._v(" "),a("li",[t._v("Java中的类假若没有明示的继承任何类，则该类默认继承Object类，Object类是Java语言提供的所有类的根类，也就是说一个对象一开始就有Object类的所有特征，")]),t._v(" "),a("li",[t._v("通过子类对象调用继承过来的方法：可以使用。因为子类继承了父类的方法，那方法就属于子类自己的了。语法：子类引用.父类方法")])]),t._v(" "),a("h3",{attrs:{id:"继承存在的缺点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#继承存在的缺点"}},[t._v("#")]),t._v(" 继承存在的缺点")]),t._v(" "),a("ul",[a("li",[t._v("父类和子类的耦合度会更高，父类修改，影响子类。")])]),t._v(" "),a("h3",{attrs:{id:"什么时候使用继承"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么时候使用继承"}},[t._v("#")]),t._v(" 什么时候使用继承")]),t._v(" "),a("ul",[a("li",[t._v("凡是能采用“is a ”来描述的， 就可以使用继承。")])]),t._v(" "),a("h3",{attrs:{id:"println方法的解释"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#println方法的解释"}},[t._v("#")]),t._v(" println方法的解释")]),t._v(" "),a("ul",[a("li",[a("p",[t._v('println方法的解释：System.out.println("Hello World!");中Sytem是类名，out后没有括号说明是静态变量，且是一个引用类型静态变量。System.out返回一个对象，然后采用“对象.”的方式prinl调用n()方法。例：')]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Test")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//静态变量")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Student")]),t._v(" stu  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Student")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" main "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n           "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stu"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("exam")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello World"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n           "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Test.stu表示Student对象")]),t._v("\n           "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello World!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Student")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//实例方法")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("exam")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" content"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("content"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n       "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ul",[a("li",[t._v("当println()直接输出引用时，会自动调用引用对象的toString()方法。")])])])]),t._v(" "),a("h2",{attrs:{id:"this"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#this"}},[t._v("#")]),t._v(" this")]),t._v(" "),a("ul",[a("li",[t._v("this是一个变量，一个引用，每一个对象对应一个this，this保存当前对象的内存地址，执行自身，this代表“当前对象”，this存储在堆内存地址对象的内部。")])]),t._v(" "),a("h3",{attrs:{id:"this的应用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#this的应用"}},[t._v("#")]),t._v(" this的应用")]),t._v(" "),a("ul",[a("li",[t._v("this只能使用在实例方法或构造方法地址，哪个引用调用了这个实例或构造方法，则this就是哪个引用，")]),t._v(" "),a("li",[t._v("this是可以省略的，省略的话还是默认访问当前对象的属性或方法。")]),t._v(" "),a("li",[t._v("在实例方法/构造方法，如果实例变量和局部变量一样名称，则为了区分局部变量和实例变量,“this.”是不能省略的。")]),t._v(" "),a("li",[t._v("this可以使用在构造方法中，如果通过当前的构造方法去调用本类的其他构造方法，可以使用以下语法格式：this(实际参数列表);，这个语法作用是代码复用，此语法，该调用语句必须写在构造方法的第一行。")]),t._v(" "),a("li",[t._v("注意：this不能出现在静态方法中，因为静态方法不需要new对象既可以调用。没有对象自然没有this。")])]),t._v(" "),a("h2",{attrs:{id:"方法重写"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法重写"}},[t._v("#")]),t._v(" 方法重写")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("定义：(Override):继承了父类的子类中，有些方法可能不需要改进，而有些方法需要改进以满足子类的特定需求，这时就要用方法覆盖来改进子类方法。")])]),t._v(" "),a("li",[a("p",[t._v("满足什么条件时用方法覆盖？")])]),t._v(" "),a("li",[a("p",[t._v("当子类对父类继承过来的方法进行“方法覆盖’后，子类对象再调用该方法时，一定执行覆盖后的方法，那代码怎么写的时候构成了方法覆盖？")]),t._v(" "),a("ol",[a("li",[t._v("两个类必须是继承关系")]),t._v(" "),a("li",[t._v("重写后的方法和之前的方法具有：相同的(返回值类型、形参列表、方法名称)。")]),t._v(" "),a("li",[t._v("访问权限不能更低，可以更高。")]),t._v(" "),a("li",[t._v("重写之后的方法不能抛出比原先方法抛出更多的异常。但可以更少。")]),t._v(" "),a("li",[t._v("注意：方法覆盖只是针对方法，和属性无关。私有方法无法覆盖，静态方法无法覆盖。")])])]),t._v(" "),a("li",[a("p",[t._v("方法重载与方法重写区别：方法重载发生在同一个类中，方法重写发生在具有继承关系的父子类之间。")])])]),t._v(" "),a("h3",{attrs:{id:"重写object类中的tostring方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重写object类中的tostring方法"}},[t._v("#")]),t._v(" 重写Object类中的toString方法")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("将Java对象转换成“字符串”")])]),t._v(" "),a("li",[a("p",[t._v("Object类中toString方法的默认形式是：public String toString(){")]),t._v(" "),a("p",[t._v('return getClass().getName() + "@"+Integer.toHexString(hashCode());')]),t._v(" "),a("p",[t._v("}")])])]),t._v(" "),a("h2",{attrs:{id:"多态机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多态机制"}},[t._v("#")]),t._v(" 多态机制")]),t._v(" "),a("ol",[a("li",[t._v("什么是多态？1.多态同一个行为在不同的对象上具有多态不同的表现形式或形态的能力， 2.多态就是一个接口，使用不同实例而指向不同操作")]),t._v(" "),a("li",[t._v("体现在父类引用指向子类对象，而父类引用调用父子类共有的方法时，直接调用子类重写后的方法(若重写了)。")]),t._v(" "),a("li",[t._v("语法格式：父类类名 变量1 = new 子类构造方法")])]),t._v(" "),a("h3",{attrs:{id:"向上转型和向下转型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#向上转型和向下转型"}},[t._v("#")]),t._v(" 向上转型和向下转型")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("向上转型：父类型的引用允许指向子类对象。")])]),t._v(" "),a("li",[a("p",[t._v("向上转型：多态本身就是向上转型过的过程")]),t._v(" "),a("ul",[a("li",[t._v("使用格式：父类类型 变量名=new 子类类型();")]),t._v(" "),a("li",[t._v("适用场景：当不需要面对子类类型时，通过提高扩展性，或者使用父类的功能就能完成相应的操作。")])])]),t._v(" "),a("li",[a("p",[t._v("向下转型：一个已经向上转型的子类对象可以使用强制类型转换的格式，将父类引用类型转为子类引用各类型，只有引用需要访问子类特有的方法时才必须要向下转型。")]),t._v(" "),a("ul",[a("li",[t._v("使用格式：子类类名 引用2 = (子类类名)引用1")]),t._v(" "),a("li",[t._v("适用场景：当要使用子类特有功能时。")])])]),t._v(" "),a("li",[a("p",[t._v("instanceof关键字：")]),t._v(" "),a("ul",[a("li",[t._v("作用：instanceof可以在运行阶段动态判断某个对象的引用是否属于某种数据类型。")]),t._v(" "),a("li",[t._v("Instancof返回值为boolean类型")]),t._v(" "),a("li",[t._v("如果要转换的引用所指的对象与被转换的对象类型之间没有继承关系，则会出现ClassCastException异常，")]),t._v(" "),a("li",[t._v("语法：if(引用 Instanceof 类型)")])])])]),t._v(" "),a("h3",{attrs:{id:"多态示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多态示例"}},[t._v("#")]),t._v(" 多态示例")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("实现多态机制的两种方式：")]),t._v(" "),a("ul",[a("li",[t._v("父类引用作为方法形参实现多态")]),t._v(" "),a("li",[t._v("方法返回值为父类类型实现多态")])])])]),t._v(" "),a("h2",{attrs:{id:"构造代码块的特点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#构造代码块的特点"}},[t._v("#")]),t._v(" 构造代码块的特点")]),t._v(" "),a("ul",[a("li",[t._v("语法：{Java语句}，声明在类体中，方法区外。")]),t._v(" "),a("li",[t._v("在类加载时不执行，在构造方法调用时执行，构造方法调用一次，构造代码块执行一次。")]),t._v(" "),a("li",[t._v("普通代码块都是方法/循环/if...后面的代码块，当方法调用时会执行普通代码块")])]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("show")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("普通代码块"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"同步代码块的语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#同步代码块的语法"}},[t._v("#")]),t._v(" 同步代码块的语法")]),t._v(" "),a("p",[t._v("synchronized（被同步对象）{}包裹起来的代码块，")]),t._v(" "),a("h2",{attrs:{id:"同步代码块的作用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#同步代码块的作用"}},[t._v("#")]),t._v(" 同步代码块的作用")]),t._v(" "),a("p",[t._v("在多线程环境下，对共享数据的读写操作是需要互斥进行的，"),a("br"),t._v("\n否则会导致数据的不一致性。同步代码块需要写在方法中。"),a("br"),t._v("\n它表示同一时间只能有一个线程进入到该方法块中，是一种多线程保护机制。"),a("br"),t._v("\n示例：")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("show")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("synchronized")]),t._v("（同步对象）"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//同步代码块  ")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"静态代码块的特点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#静态代码块的特点"}},[t._v("#")]),t._v(" 静态代码块的特点")]),t._v(" "),a("ul",[a("li",[t._v("语法：static{java语句}，声明在类体中，方法体外。")]),t._v(" "),a("li",[t._v("静态代码块在类加载时执行，先于mian方法执行，并且执行一次，自上而下顺序执行")]),t._v(" "),a("li",[t._v("一个类中可以编写多个静态代码块")])]),t._v(" "),a("h2",{attrs:{id:"什么是构造方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是构造方法"}},[t._v("#")]),t._v(" 什么是构造方法")]),t._v(" "),a("ul",[a("li",[t._v("可以完成对象创建的方法，以及完成对成员变量的初始化(在构造方法体内实现 this关键字的作用)。")]),t._v(" "),a("li",[t._v("当一个类没有提供任何构造方法，系统会默认提供无参构造方法，而这个构造方法被称为缺省构造器，当一个类编写了一个构造方法，系统将不再提供无参构造方法("),a("font",{attrs:{color:"#3ddfda"}},[t._v("通常也要手动写出无参构造方法")]),t._v(")。")],1),t._v(" "),a("li",[t._v("编写： [修饰符列表] 构造方法名(形式参数列表) {构造方法体}")])]),t._v(" "),a("h2",{attrs:{id:"构造方法的特点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#构造方法的特点"}},[t._v("#")]),t._v(" 构造方法的特点")]),t._v(" "),a("ul",[a("li",[a("font",{attrs:{color:"#3ddfda"}},[t._v("构造方法不需要指定返回值类型。")])],1),t._v(" "),a("li",[t._v("构造方法同样可以重载，参数不同(类型，数量，顺序)")]),t._v(" "),a("li",[t._v("修饰符列表写成:public")]),t._v(" "),a("li",[t._v("构造方法名必须与类名一致，")])]),t._v(" "),a("h3",{attrs:{id:"构造方法的用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#构造方法的用法"}},[t._v("#")]),t._v(" 构造方法的用法")]),t._v(" "),a("ul",[a("li",[t._v("使用new运算符调用构造方法，new Student(形式参数);")])]),t._v(" "),a("h3",{attrs:{id:"构造方法的用处"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#构造方法的用处"}},[t._v("#")]),t._v(" 构造方法的用处")]),t._v(" "),a("ul",[a("li",[t._v("实例变量的默认赋值是在调用构造方法创建对象，执行方法体时赋值的，不是在类加载时。而静态变量的默认赋值是在类加载时，局部变量，在执行方法体时。")])]),t._v(" "),a("h2",{attrs:{id:"类和对象的概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类和对象的概念"}},[t._v("#")]),t._v(" 类和对象的概念")]),t._v(" "),a("ul",[a("li",[t._v("类：抽象的概念，模板。例如“菜”，类中描述的是所有对象的“共同特征信息”。")]),t._v(" "),a("li",[t._v("对象：实际存在的个体，也叫实例。例如“西红柿”")]),t._v(" "),a("li",[t._v("通过类可以创建对象实例，这个过程叫做实例化。")]),t._v(" "),a("li",[t._v("类 = 属性 + 方法，属性对应状态，方法对应动作。")])]),t._v(" "),a("h2",{attrs:{id:"对象的创建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对象的创建"}},[t._v("#")]),t._v(" 对象的创建")]),t._v(" "),a("ul",[a("li",[a("font",{attrs:{color:"#3ddfda"}},[t._v("new类名(形参列表)")]),t._v("; 通过一个类可以创建N多个对象，new运算符专门负责对象的创建")],1),t._v(" "),a("li",[t._v("类名 变量名(引用) = new 构造方法名(参数列表);例：Student  s = Student();，此变量可以“充当”存储了对象的内存地址的变量，叫做引用。")]),t._v(" "),a("li",[t._v("所有的类都是引用数据类型，类名同时也是引用数据类型名。")])]),t._v(" "),a("h2",{attrs:{id:"对象和引用类型变量-引用-的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对象和引用类型变量-引用-的区别"}},[t._v("#")]),t._v(" 对象和引用类型变量(引用)的区别")]),t._v(" "),a("ul",[a("li",[t._v("引用不是对象，创建出来的对象将“内存地址”赋给了引用，引用在方法体内定义,存储在栈内存，"),a("font",{attrs:{color:"#3ddfda"}},[t._v('因此为局部变量，存储着对象的"内存地址"')]),t._v(".")],1),t._v(" "),a("li",[t._v("而new 类名()才是创建出来的对象,创建的对象存=储=在堆内存中。")])]),t._v(" "),a("h2",{attrs:{id:"对象对应的jvm内存结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对象对应的jvm内存结构"}},[t._v("#")]),t._v(" 对象对应的JVM内存结构")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("创建的对象存储在堆内存中，"),a("font",{attrs:{color:"#3ddfda"}},[t._v("实例变量")]),t._v("也存储在堆内存中。")],1)]),t._v(" "),a("li",[a("p",[t._v("对于实例变量来说没有手动给其赋值，系统将默认赋值，引用数据类型，默认值为null，表示不指向任何对象。")])]),t._v(" "),a("li",[a("p",[t._v("每一个对象都有不同的内存空间，实例变量在访问时必须创建对象，其对应的是不同对象的属性")]),t._v(" "),a("p",[t._v("图示")]),t._v(" "),a("p",[t._v("![[引用参数传递.jpg]]")])])]),t._v(" "),a("h2",{attrs:{id:"空指针异常"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#空指针异常"}},[t._v("#")]),t._v(" 空指针异常")]),t._v(" "),a("ul",[a("li",[t._v("NullPointerExxepetion：Java中规定堆内存的对象应该通过"),a("font",{attrs:{color:"#3ddfda"}},[t._v("引用")]),t._v("来间接访问。引用被赋值为==null==后，之前所创建的对象就没有引用指向它了，也就无法访问这个对象，该对象变为垃圾对象。")],1),t._v(" "),a("li",[t._v("Java中的垃圾回收器GC主要针对回收的是堆内存中的垃圾数据，当没有任何引用指向该对象时，将会被释放回收。")])]),t._v(" "),a("h2",{attrs:{id:"对象中属性和方法的调用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对象中属性和方法的调用"}},[t._v("#")]),t._v(" 对象中属性和方法的调用")]),t._v(" "),a("ul",[a("li",[t._v("方法调用时参数传递：参数传递时，和类型无关，无论时基本数据类型还是引用数据类型，都是将数据值复制一份传递给形参。")]),t._v(" "),a("li",[t._v("不能通过类名来直接访问实例变量，应通过对象引用来访问。引用.实例变量名。")])]),t._v(" "),a("h2",{attrs:{id:"static修饰后的特点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#static修饰后的特点"}},[t._v("#")]),t._v(" static修饰后的特点")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("所有被static修饰的都是类相关的，类级别的，在类加载时执行。 ^ec7963")])]),t._v(" "),a("li",[a("p",[t._v("所有static修饰的，都采用类名.的方式访问，不用new对象，包括静态变量，静态方法。")])]),t._v(" "),a("li",[a("p",[t._v("变量的分类：")]),t._v(" "),a("ol",[a("li",[t._v("根据变量声明的位置，进行划分：在方法体内声明的为局部变量，在类体声明的变量为成员变量。")]),t._v(" "),a("li",[t._v("成员变量又可以分为实例变量，静态变量")])])])]),t._v(" "),a("h2",{attrs:{id:"静态变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#静态变量"}},[t._v("#")]),t._v(" 静态变量")]),t._v(" "),a("h3",{attrs:{id:"存储在哪"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#存储在哪"}},[t._v("#")]),t._v(" 存储在哪？")]),t._v(" "),a("ul",[a("li",[t._v("静态变量在类加载时初始化，不需要new对象，静态变量存储在方法区，当这个类型的所有对象的某个属性值都一样时，建议将其定义为静态变量，节省空间。")])]),t._v(" "),a("h2",{attrs:{id:"静态方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#静态方法"}},[t._v("#")]),t._v(" 静态方法")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("什么时候方法定义为静态的？")]),t._v(" "),a("p",[t._v("方法都是描述了一个行为，如果该行为必须要有对象去触发，则要用实例方法，如果是编写一个工具类的话，类中的方法一般都是静态的，静态方法的优点是：不需要创建对象就可调用。")])])]),t._v(" "),a("h2",{attrs:{id:"抽象类的定义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#抽象类的定义"}},[t._v("#")]),t._v(" 抽象类的定义")]),t._v(" "),a("ul",[a("li",[t._v("在类名前加上abstract关键字后，该类变为抽象类。")])]),t._v(" "),a("h2",{attrs:{id:"抽象类的特点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#抽象类的特点"}},[t._v("#")]),t._v(" 抽象类的特点")]),t._v(" "),a("ul",[a("li",[t._v("类的特点：抽象类不能实例化，需要示例化时，需要用普通类继承抽象类，并实现其中的抽象方法，然后，依靠子类采用向上转型的方式处理；")]),t._v(" "),a("li",[t._v("方法的特点：可以有构造方法但不是用来自己创建对象的，而是为了子类构造方法调用的；可以有普通方法，可以有抽象方法。")]),t._v(" "),a("li",[t._v("抽象类不能被final和private关键字修饰，因为修饰后抽象类不能被继承了。")])]),t._v(" "),a("h2",{attrs:{id:"抽象方法的特点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#抽象方法的特点"}},[t._v("#")]),t._v(" 抽象方法的特点")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("无方法体，由;结尾，在抽象类调用构造方法时必须重写该方法，或者")]),t._v(" "),a("p",[t._v("被子类继承后重写。")])]),t._v(" "),a("li",[a("p",[t._v("抽象方法必须为public或者protected（因为如果为private，"),a("br"),t._v("\n则不能被子类继承，子类便无法实现该方法），缺省情况下默认为public；")])])]),t._v(" "),a("h2",{attrs:{id:"被子类继承后的抽象方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#被子类继承后的抽象方法"}},[t._v("#")]),t._v(" 被子类继承后的抽象方法")]),t._v(" "),a("ul",[a("li",[t._v("子类（如果不是抽象类）则必须覆写抽象类之中的全部抽象方法（"),a("br"),t._v("\n如果子类没有实现父类的抽象方法，则必须将子类也定义为为abstract类。）；")])]),t._v(" "),a("h2",{attrs:{id:"什么是接口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是接口"}},[t._v("#")]),t._v(" 什么是接口")]),t._v(" "),a("ul",[a("li",[t._v("一种引用数据类型，由interface关键字修饰，编译后为.class文件。")]),t._v(" "),a("li",[t._v("定义：修饰符 interface 名称{}")])]),t._v(" "),a("h2",{attrs:{id:"接口内的内容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#接口内的内容"}},[t._v("#")]),t._v(" 接口内的内容？")]),t._v(" "),a("ul",[a("li",[t._v("只包含两方面内容：常量、抽象方法")]),t._v(" "),a("li",[t._v("常量、抽象方法 都是默认public修饰的，且不用final或abstract修饰")])]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Mue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//可以不用final abstract修饰属性和方法，")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" num "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//常量需赋初值")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fun")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//抽象方法没有方法体")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"接口的使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#接口的使用"}},[t._v("#")]),t._v(" 接口的使用？")]),t._v(" "),a("ul",[a("li",[t._v("支持多实现，一个类可以实现多个接口，非抽象类对于实现了的接口必须实现里面所有的抽象方法，且方法都要用public 修饰，因为重写的方法访问权限应该更高，不能更低,实现用implements关键字")]),t._v(" "),a("li",[t._v("实现多态")])]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Mue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fun")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Mud")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Mue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fun")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Mus")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Mue")]),t._v(" m "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Mud")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//多态")]),t._v("\n\tm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fun")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"什么是enum类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是enum类型"}},[t._v("#")]),t._v(" 什么是Enum类型")]),t._v(" "),a("ul",[a("li",[t._v("Enum(枚举)是一种引用数据类型，编译也生成.class文件")]),t._v(" "),a("li",[t._v("语法：enum 枚举类型名{"),a("br"),t._v("\n枚举值1，枚举值2"),a("br"),t._v("\n}")]),t._v(" "),a("li",[t._v("枚举中的值可以看作是一个常量，")]),t._v(" "),a("li",[t._v("可以列举出来的，才建议使用枚举类型，等于2种类型的建议使用boolean类型，多于2种用枚举类型")])])])}),[],!1,null,null,null);a.default=v.exports}}]);