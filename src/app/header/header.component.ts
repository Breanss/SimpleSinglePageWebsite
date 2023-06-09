import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public active = "active";
  public icon = "fa-bars";
  public color=""
  constructor() {

  }

  ngOnInit(): void {

    window.top;
    let sections = document.querySelectorAll('section');
    let links = document.querySelectorAll('header nav a');
    let none = document.querySelectorAll('.toTop');

    window.onscroll=()=>{
      sections.forEach(sect=>{
        let top = window.scrollY;
        let offset=sect.offsetTop-150;
        let height = sect.offsetHeight;
        let id = sect.getAttribute('id');

        if(top>=offset && top<offset+height) {

          links.forEach(links => {
              links.classList.remove('active');
            // @ts-ignore
              document.querySelector('header nav a[href*='+id+']').classList.add('active');
          });
        }
      });

        if(window.scrollY>600){
          none[0].classList.remove('none');
        }else{
          none[0].classList.add('none');
        }

    }
  }

  showMenu(){
      if(this.active=="active"){
        this.active="";
        this.icon="fa-bars";
        this.color="menu-icon-active-color"
      }else{
        this.active="active";
        this.icon = "fa-bars";
        this.color="";
      }
  }


  changePage(){
    if(this.active!="active"){
      this.active="active";
      this.icon = "fa-bars";
      this.color="";
    }
  }


}
