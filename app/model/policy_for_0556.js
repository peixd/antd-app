export default {
  "desc": [
    "签订靓号协议",
    "不得受理任何话补"
  ],
  "items": [{
    "id": 1,
    "level": 0,
    "prerequisite": "预存200, 一次性到账",
    "ofr_charge": 99,
    "tail_desc": "除1-10级外，号码最后3位中任意一位等于4的号码"
  },
    {
      "id": 2,
      "level": 1,
      "prerequisite": "预存200, 一次性到账",
      "ofr_charge": 99,
      "tail_desc": "除0级、2-10级外，号码最后3位中均不等于4的号码"
    },
    {
      "id": 3,
      "level": 2,
      "prerequisite": "预存500, 一次性到账",
      "ofr_charge": 129,
      "tail_desc": "*ABC 非567,678,789、*XX、*X88Y、*8(ABC为累加数或递减数X不等于Y且X\\Y均不等于4)"
    },
    {
      "id": 4,
      "level": 3,
      "prerequisite": "预存500, 一次性到账",
      "ofr_charge": 169,
      "tail_desc": "*ABBA、*AAAB、*AB(00|66|99)、*ABAB(A/B均不等于4或8)"
    },
    {
      "id": 5,
      "level": 4,
      "prerequisite": "预存500, 一次性到账",
      "ofr_charge": 199,
      "tail_desc": "*X168、*X158、*X518、*8YY8、*XXXXY(X\\Y不等于4且X不等于Y)"
    },
    {
      "id": 6,
      "level": 5,
      "prerequisite": "预存500, 一次性到账",
      "ofr_charge": 299,
      "tail_desc": "*444、AB88、AABB、888A、AAA8、*AAAAAB(A不等于B,A\\B均不等于4) ,*ABC(567,678,789)"
    },
    {
      "id": 7,
      "level": 6,
      "prerequisite": "预存500, 一次性到账",
      "ofr_charge": 399,
      "tail_desc": "000、111、222、333、555、777、ABCD（不等于5678、6789）*1588、*1688、*A8A8、*88AA、*XYZXYZ(A不等于4，BCDEF为累加数或递减数，X\\Y\\Z为任意数)"
    }
  ]
}