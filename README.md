# Portfolio(react)

  <br>
 <div align=center>
 
 [![portfolio](https://user-images.githubusercontent.com/89200643/237054471-990013e0-1ca0-4f92-9e32-4f65a6d464d5.png)](https://heeseok-j.github.io/portfolio-react/)
 
  ↪イメージ**クリック**すると自動的にサイトに入ります↩
 
 </div>
 
</br>

## 1. 問題・解決

- scroll event

  <details>
  <summary>scrollY event</summary> 
   
  ---

  components ファイルの中に Hook ファイルを作り、以下のようにコードを書きました。

  ```jsx
  // useScroll.js (custom hook)

  const useScroll = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
      const ScrollUp = () => {
        setScrollY(window.pageYOffset);
      };

      window.addEventListener("scroll", ScrollUp);

      return () => window.removeEventListener("scroll", ScrollUp);
    }, []);

    return scrollY;
  };
  ```

  ***

  コードを作成した custom hook を Navbar.js に import させ、

  Ref で element のアクセスし、useState で element の height を確認する

  ```jsx
  // Navbar.js

  import React, { useState, useLayoutEffect, useRef } from "react";
  import useScroll from "../Hook/useScroll";
  import "./Navbar.css";

  const Navbar = () => {
    const ScrollY = useScroll();

    const [height, setHeight] = useState(0);
    const NavbarRef = useRef(null);

    useLayoutEffect(() => {
      setHeight(NavbarRef.current.clientHeight);
    }, []);

    return (
      <nav
        id="navbar"
        className={ScrollY > height ? `navbar-dark` : ``}
        ref={NavbarRef}
      ></nav>
    );
  };

  export default Navbar;
  ```

  </details>

---

- scroll move event
  <details>
  <summary>Refの問題解決</summary>
   
   ---

  ```
  Warning: Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()? Check the render method of Link
  ```

  forwardRef がわかってなかったので、Ref を props にして子に渡したら ref is not a prop エラーや上のようにエラーが出ました。

  forwardRef を使ってデータを渡すとパラメータがなく、もう一度エラーが出てきて調べました。
  </details>

  <details>
  <summary>解決</summary>
   
  ---
   
  Navbarでユーザーがclickしたとき、そのページへスムーズに移動するために

  まずは、最上位のコンポーネント App.js で Ref 設定をしました。

  ```jsx
  // App.js
    const App = () => {
    const homeRef = useRef();
    ...
    const contactRef = useRef();

    const onHomeClick = () => {
      homeRef.current.scrollIntoView({ behavior: "smooth" });
    };
    ...
    const onContactClick = () => {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    };

    return (
      <div>
        <Navbar
          onHomeClick={onHomeClick}
          onAboutClick={onAboutClick}
          onSkillsClick={onSkillsClick}
          onWorkClick={onWorkClick}
          onTestimonialsClick={onTestimonialsClick}
          onContactClick={onContactClick}
        />
        <Home ref={homeRef} onContactClick={onContactClick} />
        <About ref={aboutRef} />
        <Skills ref={skillsRef} />
        <Work ref={workRef} />
        <Testimonials ref={testimonialsRef} />
        <Contact ref={contactRef} />
      </div>
    );
  };

  export default App;
  ```

  ***

  そのあと、App.js から props 受けた Navbar.js はまた子である NavMenu.js にデータを渡します。

  ```jsx
  // Navbar.js
  const Navbar = (props) => {

    const NavbarRef = useRef(null);

    const onMoveToHome = () => {
      props.onHomeClick();
    };
    ...
    const onContactClick = () => {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    };

    return (
      <nav
        id="navbar"
        ref={NavbarRef}
      >
        <NavLogo />
        <NavMenu
          onMoveToHome={onMoveToHome}
          onMoveToAbout={onMoveToAbout}
          onMoveToSkills={onMoveToSkills}
          onMoveToWork={onMoveToWork}
          onMoveToTestimonials={onMoveToTestimonials}
          onMoveToContact={onMoveToContact}
          useshow={useShow}
        />
        <button onClick={toggleBtnclick} className="navbar-toggle-btn">
          <FaBars />
        </button>
      </nav>
    );
  };

  export default Navbar;
  ```

  ***

  最後に、子である NavMenu.js は親の Navbar.js から受けたデータを props を利用して Ref を渡しました。

  ```jsx
  // NavMenu.js
  const NavMenu = (props) => {
    return (
      <ul className={props.useshow ? "nav-menu" : "nav-menu show-up"}>
        <li onClick={props.onMoveToHome}>Home</li>
        <li onClick={props.onMoveToAbout}>About</li>
        <li onClick={props.onMoveToSkills}>Skills</li>
        <li onClick={props.onMoveToWork}>My work</li>
        <li onClick={props.onMoveToTestimonials}>Testimonials</li>
        <li onClick={props.onMoveToContact}>Contact</li>
      </ul>
    );
  };

  export default NavMenu;
  ```

  </details>

  <details>
  <summary>綺麗なコードに書き直し</summary>

  ***

  ```jsx
  // App.js
  const App = () => {
    const elementRef = useRef([]); // scroll moveしたいコンポーネントを配列に入れる

    return (
      <div>
        <Navbar elementRef={elementRef} /> 　//
        配列に入れた各コンポーネントを渡し
        <Home
          elementRef={elementRef} // 配列に入れた各コンポーネントを渡し
          ref={(el) => (elementRef.current[0] = el)} //　indexが0～5まであるため、配列は全て六つになる
        />
        <About ref={(el) => (elementRef.current[1] = el)} />
        <Skills ref={(el) => (elementRef.current[2] = el)} />
        <Work ref={(el) => (elementRef.current[3] = el)} />
        <Testimonials ref={(el) => (elementRef.current[4] = el)} />
        <Contact ref={(el) => (elementRef.current[5] = el)} />
      </div>
    );
  };

  export default App;
  ```

  App.js で各コンポーネントを配列にして管理し、このデータが必要な Navbar と Home コンポーネントに渡します。

  ***

  ```jsx
  // Navbar.js

  const Navbar = ({ elementRef }) => {
    // elementRef = App.jsからもらったデータ

    // ...scrollY eventの情報

    return (
      <nav
        id="navbar"
        className={ScrollY > height ? `navbar-dark` : ``}
        ref={NavbarRef}
      >
        <NavLogo />
        <NavMenu useshow={useShow} elementRef={elementRef} />
        　　// App.jsからもらったデータをもう一度、NavMenu.jsに渡し
        <button onClick={toggleBtnclick} className="navbar-toggle-btn">
          <FaBars />
        </button>
      </nav>
    );
  };

  export default Navbar;
  ```

  App.js でもらった elementRef の情報は NavMenu に渡しました。

  ***

  ```jsx
  //NavMenu.js

  const navMenuList = [{...}, {...}, {...}, {...}, {...}, {...},];  // idとtitle入ってる

  const NavMenu = ({ useshow, elementRef }) => {
    return (
      <ul className={useshow ? "nav-menu" : "nav-menu show-up"}>
        {navMenuList.map((item) => (
          <li
            // クリックしたらelementRefのcurrent[index = item.id]にアクセスする
            onClick={() => elementRef.current[item.id].scrollIntoView({behavior: "smooth"})}
            key={item.id}
          >
            {item.title}
          </li>
        ))}
      </ul>
    );
  };

  export default NavMenu;
  ```

  App.js から Navbar.js を通って NavMenu まで情報を伝達し、elementRef.current[0~5]までの index を

  navMenuList の id と一致させ、クリックすると移動できるように前よりもっと簡単にコードを書き直しました。

  </details>

---

- button onclick event

     <details>
     <summary>element show & hide</summary> 
      
      このパートを解決するのに一番時間かかったと思う。<br>
      JSではqueryselectorを使いましたが、調べたところ、あんまりよくないという人が多かったので <br>
      queryselector使わずに解決しようと思って失敗が多かった。
      
      ---

  ### Ref の current で該当エレメントにアクセス

  queryselector 使わずにどうすれば分からなくて最初は Ref でアクセスしてできるかテストをしてみました。

      <img width="800" height='300' src="https://github.com/heeseok-j/portfolio-react/assets/89200643/787852ed-421e-4894-9a25-e662d9b55fae">

  Ref.current まではできましたが、データのタイプまではアクセスするのはできなかったので失敗でした。

  ***

  ### button クリックすると useState で className 変更

  useState を利用して className を変更すれば、できるかどうかテストをしてみました。

  ```jsx
  // WorkProject.js
  const WorkProject = () => {
    const [hide, setHide] = useState(true);

    const clickHandler = (e) => {
      const filter = e.target.dataset.filter;
      {
        projectItem.map((item) => {
          if (item.type === filter) {
            setHide(!hide);
          }
        });
      }
    };

    return (
      <div id="work-projects">
        <button data-filter="pumpkin" onClick={clickHandler}>
          test(pumpkin)
        </button>
        {items.map((item) => (
          <div
            className={hide ? "project" : "project invisible"}
            data-type={item.type}
            target="_blank"
            key={item.id}
          >
            <img className="project-img" src={item.src} alt={item.alt} />
            <div className="project-description">
              <h3>{item.title}</h3>
              <span>{item.language}</span>
            </div>
          </div>
        ))}
      </div>
    );
  };

  export default WorkProject;
  ```

  button をクリックしたら、エレメント全てが show & hide になって失敗でした。

  どうすれば各エレメントが作動できるか数日悩んだ結果、それぞれのエレメントに state を変更したら何かできると確信しました

     </details>
     
     <details>
     <summary>解決</summary>

  ### ボタンのデータと show & hide したいエレメントのデータ一致

  ***

  まずは、button の場合は CategoryList component にあったので、WorkProject(子) ⇄ Work(親) ⇄ CategoryList(子)のように

  それぞれ必要なデータを Lifting State Up しました。

  ```jsx
  // CategoryList.js

    const categoryList = [...];

  const CategoryList = (props) => {
  const [items, setItems] = useState(props.projectData);　// props.projectData = WorkProjectからLiftingしたデータ

  useEffect(() => {
    props.setMatchCheck(items);
  });


  const click = (e) => {
    const filter = e.target.dataset.filter;
    const triggeredItems = props.projectData.map((item) => {
      if (item.type === filter || filter === "all") {
        item.isVisible = true;
      } else {
        item.isVisible = false;
      }
      return item;
    });
    setItems(triggeredItems);
  };

  return (
    <div className="work-categories">
      {categoryList.map((item) => (
        <button
          onClick={click}
          data-filter={item.filter}
          key={item.id}
          className="category-btn"
        >
          {item.name}
          <span className="category-count">{item.number}</span>
        </button>
      ))}
    </div>
  );
  };

  export default CategoryList;
  ```

  ***

  親である Work component のコードを読むと、親である Work で useState を利用して子である CategoryList と WorkProject に

  それぞれ必要なデータを受けたり渡したりする役目です。

  ```jsx
  // Work.js
  const Work = forwardRef((props, ref) => {
    const [projectData, setProjectData] = useState(""); //WorkProject componentからデータを受け、CategoryList componentにデータ渡し
    const [matchCheck, setMatchCheck] = useState(""); //CategoryList componentからデータ変更されたの受け、WorkProject componentにデータ渡し
    return (
      <section ref={ref}>
        <h1>My work</h1>
        <h3>Projects</h3>
        <CategoryList setMatchCheck={setMatchCheck} projectData={projectData} />
        <WorkProject matchCheck={matchCheck} setProjectData={setProjectData} />
      </section>
    );
  });

  export default Work;
  ```

  ***

  CategoryList で変更されたデータを親の Work に、Work からもらったデータを

  条件を利用してそれぞれのエレメントを show & hide ができるよう、コードを完成しました。

  ```jsx
  // WorkProject.js


  const projectItem = [{...},{...},{...},{...}]; //　ここの配列にisVisible: 'true'が入ってます

  const WorkProject = (props) => {
    useEffect(() => {
      props.setProjectData(projectItem);
    });

    return (
      <div className="work-projects">
        {projectItem.map((item) => (
          <div
            onClick={() => window.open(item.url)}
            className={item.isVisible ? "project" : "project invisible"} // CategoryListから変更されたデータを受け、条件式
            data-type={item.type}
            target="_blank"
            key={item.id}
          >
            <img className="project-img" src={item.src} alt={item.alt} />
            <div className="project-description">
              <h3>{item.title}</h3>
              <span>{item.language}</span>
            </div>
          </div>
        ))}
      </div>
    );
  };

  export default WorkProject;

  ```

  ***

  ### re-render できなくてアップデータのエラー

    <img src='https://github.com/heeseok-j/portfolio-react/assets/89200643/530c9506-02bc-49a4-b03f-4d4425ecf730'>

  上の解決にしたら次ののようにエラーが発生した。

  どこで問題があったか調べたら以下のコードに問題があった。

     <img width='400' height='250' src='https://github.com/heeseok-j/portfolio-react/assets/89200643/3a659b24-817c-42ca-ba9c-fdd01ed19242'>

  state を変更する部分が useEffect による変更ではなく、ロジック内部にコードがあったのでエラーがあった。

  React は props や state 変更によって re-render するので useEffect を使ったら解決できました。

  ## </details>

- button onclick animation event

    <details>
    <summary>click animation event</summary>

  ***

  このアニメーションの場合は、まだ useEffect について深く勉強しなかったので、後で追加する予定です。

    </details>
    
    <details>
    <summary>解決</summary> 
     
    </details>

---

- Intersection Observer event
  <details>
  <summary>observer</summary>

  ***

  CSS のアニメーションを動的に見せるために Intersection Observer を使って Skill & Testimonials component に適用しました。

  以下は Skill component の子である SkillLeft.js にコードを書いた部分です。

  ```jsx
  // SkillLeft.js

  const SkillLeft = () => {
    const [viewport, setViewport] = useState(false);

    const { ref, inView } = useInView({
      root: null,
      rootMargin: "0px",
      threshold: 0.35,
    });

    useEffect(() => {
      if (inView) {
        setViewport(true);
      }
    }, [inView]);

    return (
      <div ref={ref} className="skillset-left">
        <h3 className="skillset-title">Skills</h3>
        {skillItem.map((item) => (
          <div key={item.id} className="skill">
            <div className="skill-description">
              <span>{item.title}</span>
              <span>{item.percent}%</span>
            </div>
            <div className="skill-bar">
              <div className={viewport ? `${item.value}` : ""} />{" "}
              //vieportが35％見えたらanimationができるよう
            </div>
          </div>
        ))}
      </div>
    );
  };

  export default SkillLeft;
  ```

  </details>
  <br>
