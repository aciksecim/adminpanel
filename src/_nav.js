export default {
  items: [
    {
      name: 'Kontrol Paneli',
      url: '/dashboard',
      icon: 'icon-speedometer',
    },
    {
      title: true,
      name: 'Veritabanı',
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: ''             // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'Kullanıcılar',
      icon: 'icon-user',
      children: [
        {
          name: 'Kullanıcı Ekle',
          url: '/veritabani/kullanici/ekle',
          icon: 'cui-user-follow',
        },        
        {
          name: 'Kullanıcıları Düzenle',
          url: '/veritabani/kullanici/duzenle',
          icon: 'cui-pencil',
        },
      ]
    },
    {
      name: 'Adaylar',
      icon: 'icon-people',
      children: [
        {
          name: 'Aday Ekle',
          url: '/veritabani/aday/ekle',
          icon: 'cui-user-follow',
        },        
        {
          name: 'Adayları Düzenle',
          url: '/veritabani/aday/duzenle',
          icon: 'cui-pencil',
        },
      ]
    },
    {
      name: 'Partiler',
      icon: 'cui-lightbulb',
      children: [
        {
          name: 'Parti Ekle',
          url: '/veritabani/parti/ekle',
          icon: 'cui-user-follow',
        },        
        {
          name: 'Partileri Düzenle',
          url: '/veritabani/parti/duzenle',
          icon: 'cui-pencil',
        },
      ]
    },
    {
      name: 'İttifaklar',
      icon: 'icon-people',
      children: [
        {
          name: 'İttifak Ekle',
          url: '/veritabani/ittifak/ekle',
          icon: 'cui-user-follow',
        },        
        {
          name: 'İttifakları Düzenle',
          url: '/veritabani/ittifak/duzenle',
          icon: 'cui-pencil',
        },
      ]
    },
    {
      name: 'Tutanaklar',
      icon: 'cui-circle-check',
      children: [
        {
          name: 'Tutanak Ekle',
          url: '/veritabani/tutanak/ekle',
          icon: 'cui-user-follow',
        },        
        {
          name: 'Tutanakları Düzenle',
          url: '/veritabani/tutanak/duzenle',
          icon: 'cui-pencil',
        },
      ]
    },
    {
      name: 'Sandıklar',
      icon: 'cui-inbox',
      children: [
        {
          name: 'Sandık Ekle',
          url: '/veritabani/sandik/ekle',
          icon: 'cui-user-follow',
        },        
        {
          name: 'Sandıkları Düzenle',
          url: '/veritabani/sandik/duzenle',
          icon: 'cui-pencil',
        },
      ]
    }
  ]
};