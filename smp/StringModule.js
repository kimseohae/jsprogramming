       var StringModule = (()=>{
            var proxString = {
                get : function(t, k, r){
                    return Reflect.get(t,k,r);
                },
                set : function(t, k, v, r){ /* t : 타겟 , k : 키 , v : 벨류 , r : 리시버(프록시) */
                    if(!isNaN(k = parseInt(k))) {
                        if(!t[k-1]){
                            if(k-1 > 0)
                            this.set(t,k-1,'',r);   
                        }
                        t.length = t.length <= 1+parseInt(k) ? 1+parseInt(k) : t.length;

                        return Reflect.set(t,k,v);
                    }
                    return Reflect.set(t,k,v);
                }
            }
            var originString = String;
            var originPrototype = 
            { 
                $ : function(fn, args) {
                    var p = this['[[PrimitiveValue]]'];
                    return originString['prototype'][fn]['apply'](p[p.length-1].value, args)}
                , charAt : function(){return this.$('charAt',arguments)}
                , charCodeAt : function(){return this.$('charCodeAt',arguments)}
                , codePointAt : function(){return this.$('codePointAt',arguments)}
                , concat : function(){return this.$('concat',arguments)}
                , String : function(){return this.$('String',arguments)}
                , endsWith : function(){return this.$('endsWith',arguments)}
                , fixed : function(){return this.$('fixed',arguments)}
                , fontcolor : function(){return this.$('fontcolor',arguments)}
                , fontsize : function(){return this.$('fontsize',arguments)}
                , includes : function(){return this.$('includes',arguments)}
                , indexOf : function(){return this.$('indexOf',arguments)}
                , italics : function(){return this.$('italics',arguments)}
                , lastIndexOf : function(){return this.$('lastIndexOf',arguments)}
                , link : function(){return this.$('link',arguments)}
                , localeCompare : function(){return this.$('localeCompare',arguments)}
                , match : function(){return this.$('match',arguments)}
                , normalize : function(){return this.$('normalize',arguments)}
                , padEnd : function(){return this.$('padEnd',arguments)}
                , padStart : function(){return this.$('padStart',arguments)}
                , repeat : function(){return this.$('repeat',arguments)}
                , replace : function(){return this.$('replace',arguments)}
                , search : function(){return this.$('search',arguments)}
                , slice : function(){return this.$('slice',arguments)}
                , small : function(){return this.$('small',arguments)}
                , split : function(){return this.$('split',arguments)}
                , startsWith : function(){return this.$('startsWith',arguments)}
                , strike : function(){return this.$('strike',arguments)}
                , sub : function(){return this.$('sub',arguments)}
                , substr : function(){return this.$('substr',arguments)}
                , substring : function(){return this.$('substring',arguments)}
                , sup : function(){return this.$('sup',arguments)}
                , toLocaleLowerCase : function(){return this.$('toLocaleLowerCase',arguments)}
                , toLocaleUpperCase : function(){return this.$('toLocaleUpperCase',arguments)}
                , toLowerCase : function(){return this.$('toLowerCase',arguments)}
                , toString : function(){return this.$('toString',arguments)}
                , oUpperCase : function(){return this.$('oUpperCase',arguments)}
                , trim : function(){return this.$('trim',arguments)}
                , trimLeft : function(){return this.$('trimLeft',arguments)}
                , trimRight : function(){return this.$('trimRight',arguments)}
                , valueOf : function(){return this.$('valueOf',arguments)}
                , commit : function(){var p = this['[[PrimitiveValue]]'];
                                     p[p.length] = {value:(function(o){var ret = '';
                                                                   for(i=0;i<o.length;i++)ret += o[i];
                                                                        return ret;})(this),version : p.length}
                           }
                , rollback : function(i){
                    this['[[PrimitiveValue]]']['length'] = i ? i+1 : 1;
                }
            };
            return function(){
                this.String = function(value){
                    
                    if( this === window ) return new String(value);
                    var r = new Proxy(this, proxString);
                    this['[[PrimitiveValue]]'] = [{
                       value:value?value:"",
                        varsion:0
                    }] 
                    for(var idx = 0 ; idx < value ? value.length : 0 ; idx++){
                        this[idx] = value[idx];
                    }
                    this.length = idx;
                    return r;
                }
                this.String.prototype = originPrototype;
            }
        })();