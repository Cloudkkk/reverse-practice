/**
 * 主函数，处理输入并返回结果
 */
const processInput = ({ input }) => {
    const processedString = truncateString({ input });
    const encodedData = encodeUTF8({ str: processedString });
    const result = calculate({ encodedData, key: r });
    return result;
  };
  
  /**
   * 处理并可能截断输入字符串
   */
  const truncateString = ({ input, maxLength = 30 }) => {
    const unicodeChars = input.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g);
    
    if (!unicodeChars) {
      return truncateNonUnicodeString({ input, maxLength });
    }
    
    return truncateUnicodeString({ input, unicodeChars, maxLength });
  };
  
  /**
   * 截断非 Unicode 字符串
   */
  const truncateNonUnicodeString = ({ input, maxLength }) => {
    if (input.length <= maxLength) return input;
    
    const start = input.substr(0, 10);
    const middle = input.substr(Math.floor(input.length / 2) - 5, 10);
    const end = input.substr(-10, 10);
    
    return `${start}${middle}${end}`;
  };
  
  /**
   * 截断包含 Unicode 字符的字符串
   */
  const truncateUnicodeString = ({ input, unicodeChars, maxLength }) => {
    const parts = input.split(/[\uD800-\uDBFF][\uDC00-\uDFFF]/);
    const chars = parts.flatMap((part, index) => [
      ...part.split(''),
      ...(index < unicodeChars.length ? [unicodeChars[index]] : [])
    ]);
  
    if (chars.length <= maxLength) return chars.join('');
  
    const start = chars.slice(0, 10).join('');
    const middle = chars.slice(Math.floor(chars.length / 2) - 5, Math.floor(chars.length / 2) + 5).join('');
    const end = chars.slice(-10).join('');
  
    return `${start}${middle}${end}`;
  };
  
  /**
   * 将字符串编码为 UTF-8
   */
  const encodeUTF8 = ({ str }) => {
    const result = [];
    
    for (let i = 0; i < str.length; i++) {
      const code = str.charCodeAt(i);
      
      if (code < 128) {
        result.push(code);
      } else if (code < 2048) {
        result.push((code >> 6) | 192);
        result.push((code & 63) | 128);
      } else if (
        (code & 0xFC00) === 0xD800 &&
        i + 1 < str.length &&
        (str.charCodeAt(i + 1) & 0xFC00) === 0xDC00
      ) {
        const surrogate = 0x10000 + ((code & 0x3FF) << 10) + (str.charCodeAt(++i) & 0x3FF);
        result.push((surrogate >> 18) | 240);
        result.push(((surrogate >> 12) & 63) | 128);
        result.push(((surrogate >> 6) & 63) | 128);
        result.push((surrogate & 63) | 128);
      } else {
        result.push((code >> 12) | 224);
        result.push(((code >> 6) & 63) | 128);
        result.push((code & 63) | 128);
      }
    }
    
    return result;
  };
  
  /**
   * 使用编码后的数据进行计算
   */
  const calculate = ({ encodedData, key }) => {
    const [f, m] = key.split('.').map(Number);
    let b = f;
  
    const w = "+-a" + "^+6";
    const k = "+-3" + "^+b" + "+-f";
  
    for (const value of encodedData) {
      b = n(b + value, w);
    }
  
    b = n(b, k);
    b ^= m;
  
    if (b < 0) {
      b = 2147483648 + (2147483647 & b);
    }
  
    b %= 1e6;
  
    return `${b.toString()}.${b ^ f}`;
  };
  
  /**
   * 辅助计算函数
   */
  const n = (t, e) => {
    for (let n = 0; n < e.length - 2; n += 3) {
      let r = e.charAt(n + 2);
      r = 'a' <= r ? r.charCodeAt(0) - 87 : Number(r);
      r = '+' === e.charAt(n + 1) ? t >>> r : t << r;
      t = '+' === e.charAt(n) ? (t + r) & 4294967295 : t ^ r;
    }
    return t;
  };
  
  // 使用示例
  const r = "320305.131321201";
  console.log(processInput({ input: 'haha' }));
  