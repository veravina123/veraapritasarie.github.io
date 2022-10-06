$(document).ready(function(){
    alert(0)
    $('.nama_mhs').click(function(){
        alert(1)
        let isi = $(this).text();
        alert(isi);

        let isi2 = prompt('Ubah dengan', isi);
        if(!isi2) return;

        alert(isi2);
    })
    })

    $('.hapus').click(function){
        alert(1)
        let yakin = confirm('Yakin Nih Mau Dihapus?');
        if(!yakin) return;

        let id = $(this).prop('id');
        alert(id);

        let rid = id.split('__');
        let baris_ke = rid[1];
        alert(baris_ke);

        $('#row__'+baris_ke).slideUp()


        
            alert("Anda mengklik kolom yang berisi : " + $(this).html() + "!");
        }
    })
})