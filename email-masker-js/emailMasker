let email = "iemand@outlook.com";


function maskEmail(a) {

  let at = a.indexOf("@");
  let beforeAt = a.slice(0, at);
  let behindAt = a.slice(at);
  let email = beforeAt[0] + '*'.repeat(beforeAt.length - 2) + beforeAt.slice(-1) + behindAt;
  return email;
};


console.log(maskEmail('wubbo@hotmail.nl'));
