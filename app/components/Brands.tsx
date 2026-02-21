import React, { useEffect, useState } from 'react';

type ManifestEntry = string | { src: string; alt?: string; name?: string };

const builtinTop = [
  { name: 'Brightso', logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuALZT2zCcD2YbVxYak9dPwrKf8Lqlk2BLMwVVKuhv3QRFu4ovcYIDcxlj3rHDJsw9qdmTb6WHX94nlrYukoYPfU7KES6VS0OsavavWWSExixze5ogGBEwel8nRh8eFSheOFhQu5Zv5APSj_I4XNwVT0u7Cx0BhFnTYlDfOvc85KVACpGmzdp9Chwvsfd3jnva05CROUXXHVgDG0-MXUhQ9EJtJ6M1uBVknD6zQxzHOziXWExHleUPQwve8J9pilsmW73FswX1sU1Fse' },
  { name: 'LPU', logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDu-XV-C4uQEr159fzYoD5lTtbK2z0TV_VGnWzE1edd_yjOgCfvVIXWWxbPR61PUUTrdfXO04YXk8l-ObFzqKIDoO-iYQBflAoJRwV9YqI_L7y_QIMitNYStny5WCg-WtbfaCYRkaGEZb1QYQbdtYCjqUXMC41AciJkeG33hUfP70LIjZyqO-Gu7_nO5vZKwCY0vsixkbw6TGV1XKClNE891DibkQ_ugVVn4EzkJOlbQUPKGbo4T4g3hAY8fwRigCWHX4dGXQGge95V' },
  { name: 'Trae AI', logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAGZ5QEn1EL4phyS3_BlmPmS8r8VoYEb5JVGtoCwGiar2YjXtqcf7kuzENYxJkR1wswHRBj3IXWON1rXjRLGWz41onrEyhOrD6nca-geJK70Y5ucUyLPU4c_7JDMvtNBcMd7ovgVihq2dJijYipROH4fsTEemto69hOshv3dWkNynq4yTdG8VxSgGZOTsG5kvbTGKkVrcRozaa8nfblJyja_Jn7j5kwaUxvGAQzo59WsoX29mk2qlIo1k2rGwrleb-26FstHYMwoNII' },
  { name: 'Algo University', logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCOKhoFOEa-Tj3WmCh4P04l42MzxOINFNhkKeregbVtoHy6G4XOVrj_mdroMk_mD84xEmsJQqoyeYZmKq26xB9ZfoiomUd4zDBwGZh8NojC3nzmEdAAbOmwD7cNQ-gBKXgI_xFp-l4Kq68UjGbmx3ARYcZyHD4UW8XkSvTRHqz5kPJ1FGa2spj45ItliDM_jBtLScO6e20WGTJqca_ptA5WsmBw-j3GWlgiNW21I8zfLClfNvtzb5-NZnBuGVF4krbbHqtXFPMzMmVG' },
  { name: 'Final Round AI', logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB92FHpSKGlqyD8sGhco-M9PdScCbj0IALSbBjYxaAp10FjvnHggWZvVvUMmznK1msK5f8SKrM98pOcfZQYI72FutD1iplkPdpv1EXtpvX_tfmzSncKaeTMNJzIs4cv-A_Wwcdp-zIgKTIy_JMYITQPJ5GbXbIC5MEBeUQFmRLLglEJ2-aIDVcCceMmrJWzKieGQ_Wp04Un8aw9S9Cxlkp8T2kYlwaVPiul0JYJ5016rmzPFgtX_r6agdn0sdehmt3f_g0ygTcpTAbG' },
  { name: 'Saras AI', logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCS0LA16j9rq6_5rkDwgHCl6iXgZqw-aWgTwcYypJajnJpf5vHKEfY1pdtQa3SJ40qFKgtk53TcxQBK31kTZnqdwiNbnDJD6AZhYzzeF31JlsSKOTfKHZfFHV2nuXCdMHS8382dC0wmpWux3c9ShIcXVmvDTsVsFRj6JQLN-u10aext3k6ROXZtW5g36eurqYqlFb8fUaZV9OrFy9p-4bUE80tTSSM6CtoQJSt-tSvJ40XPTcfahl71kLPMg4q7Ol3pyIXr7HvulefN' },
];

const builtinBottom = [
  { type: 'image', alt: 'GeeksforGeeks', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA6JGDa8ty838QoALgQqMIA4TXZ04TT20KAQ8lt-Nneq46YHAgar9xR4GHeiIxJnc17wTOgy6IkZ_A-gDEUZD5jvuGApu4_vP8dAvUgjNG4_PQ2QUJXxUIvcgeqQYhfjB9fSxK5RxAC4Mz3wayN4XeDgQjNUkxlwmLL34CL11hElnO47Mp6OrMbEfKx680p7yWfBMfEAPRf12kF6RuDxXW7-Nm83WWQUR0CTm_dismygnzuGKP9qe8glvFxV4I6EZxoAG7fYD1L1wY7' },
  { type: 'image', alt: 'Face Check ID', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDaBOH095pb60RstD_CdmgUHRkP-p2GjeqbZvq17_ThiPb3rwAWhXt0S1lXnMgBAlCRqa6XWoDmB_VFCvojanDqh6ckkRR8USbXOTw46xIwea5bixDYSnDPCxx1IiVwqGpwOciZi9sfs00y3ZQDAXh1XPeF-OpHxCdEwFiMQmF7sRf9iNyB9zNOQZwZbLb05GOzdfOe-ghaz84rTFeoaZ7cjX-ad98hNVbInwIQIkwvaCEL_DMhbSVGOwK00mH4QRKNr19hIBD7mdQi' },
  { type: 'image', alt: 'SoloCabs', src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAnalwOJJCXWrs2nzrL2M8_vrFYstv_cZ6eH-INw6gfGYHyFuuBQ--rPLixlDRJu-PTNpA-TiefJQXzfWvVyesBHDeiXkcoguox25nhrw0GoK7Pl854QZvvGpkdiSQ8lP-2AEcwAlKlTGebMavrDfUMJ2AjIF43zi1ZoTcs1ALbJJz5cFkQDV0PyF0Y4VoqKbXILO0guYuHYtZh1M2LDs9JwXPmKvRw1WqyP6Si09aFBq0ywFGiDUoi15xvb0Z0j3eG28jofK6sOM5q' },
];

const Brands: React.FC = () => {
  const [logos, setLogos] = useState<{ src: string; alt?: string }[]>([]);

  useEffect(() => {
    let mounted = true;
    fetch('/assets/brands/brands.json', { cache: 'no-store' })
      .then(res => res.json())
      .then((list: ManifestEntry[]) => {
        if (!mounted) return;
        if (!Array.isArray(list) || list.length === 0) {
          const fallback = [
            ...builtinTop.map(b => ({ src: b.logo, alt: b.name })),
            ...builtinBottom.map(b => ({ src: b.src, alt: b.alt }))
          ];
          setLogos(fallback);
          return;
        }
        const normalized = list.map((item) => {
          if (typeof item === 'string') {
            const isRemote = /^https?:\/\//i.test(item);
            return { src: isRemote ? item : '/assets/brands/' + item, alt: item };
          }
          if (item && typeof item === 'object') {
            let src = item.src || '';
            if (!/^https?:\/\//i.test(src) && !src.startsWith('/')) src = '/assets/brands/' + src;
            return { src, alt: item.alt || item.name || src };
          }
          return null;
        }).filter(Boolean) as { src: string; alt?: string }[];
        setLogos(normalized);
      })
      .catch(() => {
        const fallback = [
          ...builtinTop.map(b => ({ src: b.logo, alt: b.name })),
          ...builtinBottom.map(b => ({ src: b.src, alt: b.alt }))
        ];
        if (mounted) setLogos(fallback);
      });
    return () => { mounted = false };
  }, []);

  return (
    <section className="py-16 bg-white" id="brands">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="font-serif italic text-3xl md:text-4xl font-bold mb-12 text-gray-900">Brands I've Worked With</h2>
        {logos.length === 0 ? (
          <div className="empty">No brand logos found.</div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8 items-center mb-12">
            {logos.map((l, i) => (
              <div key={i} className="flex flex-col items-center group transition-transform hover:scale-105 duration-300">
                <div className="bg-white rounded-xl p-5 shadow-md hover:shadow-xl flex items-center justify-center w-32 h-28 md:w-36 md:h-32 border border-gray-100 group-hover:border-primary transition-all">
                  <img alt={l.alt || `brand-${i}`} src={l.src} className="max-h-16 md:max-h-20 max-w-full object-contain group-hover:scale-110 transition-transform" />
                </div>
                <div className="mt-3 text-xs md:text-sm font-bold uppercase tracking-wider text-gray-600 text-center leading-tight group-hover:text-primary transition-colors">{l.alt}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Brands;
