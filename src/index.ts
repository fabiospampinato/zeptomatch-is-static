
/* MAIN */

const re = /^(?:\\$|\\.|[^*?!^{}[\]\\])*$/s;

const isStatic =  ( glob: string ): boolean => {

  return re.test ( glob );

};

/* EXPORT */

export default isStatic;
