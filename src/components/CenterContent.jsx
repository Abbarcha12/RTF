import React from 'react'
import AfterNavbar from './AfterNavbar'
import BlueSidebar from './BlueSidebar'
import DeviceSystemForm from './deviceSystem-form'
import { Grid } from '@mui/material'
import Box from '@mui/material/Box'
import { Container } from '@mui/material'
import { Button } from '@mui/material'
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'

import Img2 from '../assest/Mobile.png'
import Dropdown from './Drpdown'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))
const CenterContent = ({ Toggle }) => {
  return (
    <>
      <div>
        <AfterNavbar />
      </div>
      <div style={{ display: 'flex' }}>
        <BlueSidebar Toggle={Toggle} />
        <Grid
          container
          spacing={10}
          sx={{
            padding: '10px',
            paddingRight: '20px',
            paddingLeft: '20px',
            backgroundColor: '#e2e6e9',
            marginTop: '10px',
          }}
        >
          <Grid item lg={6}>
            <div className='DeviceSytem__form-head'>
              <h2 style={{ fontWeight: '900' }}>הגדרות מכשיר</h2>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                }}
              >
                <div className='DeviceSytem__form-head-btnGrp'>
                  <Button
                    className='DeviceSystem__head-btn'
                    sx={{
                      border: '1px solid #2082ab',
                      backgroundColor: '#1da7e0',
                      borderRadius: '0px',
                      color: 'white',
                    }}
                    variant='text'
                  >
                    ללא על
                  </Button>
                  <Button
                    className='DeviceSystem__head-btn'
                    sx={{
                      border: '1px solid #2082ab',
                      backgroundColor: '#1da7e0',
                      borderRadius: '0px',
                      color: 'white',
                    }}
                    variant='text'
                  >
                    על
                  </Button>
                </div>
                <span style={{ color: 'grey' }}>הגדרות מכשיר</span>
              </Box>
            </div>
            <div className='deviceSystem_form-body'>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-end',
                  margin: '20px auto',
                }}
              >
                <form style={{ width: '100%' }}>
                  <div>
                    <label htmlFor='Name'>
                      שם מכשיר )- יופיע על צג המכשיר)
                    </label>
                    <input
                      type='text'
                      id='Name'
                      style={{
                        width: '100%',
                        marginTop: '10px',
                        height: '30px',
                        border: 'none',
                      }}
                      placeholder='חנות נאפו - דיזינגוף'
                    />
                  </div>
                  <div style={{ marginTop: '20px' }}>
                    <label>אפליקציה</label>
                    <div style={{ marginTop: '10px' }}>
                      <Dropdown />
                    </div>
                  </div>
                  <div style={{ marginTop: '20px' }}>
                    <label htmlFor='phone'>מזהה מכשיר</label>
                    <input
                      type='text'
                      id='Phone'
                      style={{
                        width: '100%',
                        marginTop: '10px',
                        height: '30px',
                        border: 'none',
                      }}
                      placeholder='מזהה מכשיר'
                    />
                  </div>
                  <div style={{ marginTop: '20px' }}>
                    <label>מותג</label>
                    <div style={{ marginTop: '10px' }}>
                      <Dropdown />
                    </div>
                  </div>
                  <div style={{ marginTop: '20px' }}>
                    <label>ספק שיחת</label>
                    <div style={{ marginTop: '10px' }}>
                      <Dropdown />
                    </div>
                  </div>
                  <div style={{ marginTop: '20px' }}>
                    <label htmlFor='phone'>זנגוט</label>
                    <input
                      type='text'
                      id='Phone'
                      style={{
                        width: '100%',
                        marginTop: '10px',
                        height: '30px',
                        border: 'none',
                      }}
                    />
                  </div>
                  <div style={{ marginTop: '20px' }}>
                    <label>הערות</label>
                    <div style={{ marginTop: '10px' }}>
                      <Dropdown />
                    </div>
                  </div>
                  <div style={{ marginTop: '20px' }}>
                    <label htmlFor='number'>סוג חיוב</label>
                    <input
                      type='number'
                      id='number'
                      style={{
                        width: '100%',
                        marginTop: '10px',
                        height: '30px',
                        border: 'none',
                      }}
                    />
                  </div>

                  <div style={{ marginTop: '20px' }}>
                    <input
                      type='checkbox'
                      id='checkedOne'
                      style={{
                        marginTop: '10px',
                        marginLeft: '10px',
                        border: 'none',
                      }}
                    />
                    <label htmlFor='checkedOne'>
                      לסגור עסקאות CTLS (נתמך בגרסה 0.43 ומעלה(
                    </label>
                  </div>
                  <div style={{ marginTop: '20px' }}>
                    <input
                      type='checkbox'
                      id='checkedTwo'
                      style={{
                        marginTop: '10px',
                        marginLeft: '10px',
                        border: 'none',
                      }}
                    />
                    <label htmlFor='checkedTwo'>
                      ש למנוע עסקאות כפולות (נתמך בגרסה 1 ומעלה)
                    </label>
                  </div>
                  <div style={{ marginTop: '20px' }}>
                    <input
                      type='checkbox'
                      id='checkedThree'
                      style={{
                        marginTop: '10px',
                        marginLeft: '10px',
                        border: 'none',
                      }}
                    />
                    <label htmlFor='checkedThree'>
                      עזכן מלא של נתוני אשראית בשידור הבא
                    </label>
                  </div>
                  <h2 style={{ fontWeight: '900', marginTop: '4rem' }}>
                    הגדרות מכשיר
                  </h2>
                  <h3 style={{ fontWeight: '900', color: 'grey' }}>
                    הגדרות מכשיר
                  </h3>
                  <h4 style={{ fontWeight: '900', color: 'grey' }}>5753202</h4>
                  <div style={{ marginTop: '20px' }}>
                    <label htmlFor='num'>מספר קופה</label>
                    <input
                      type='text'
                      id='num'
                      style={{
                        width: '100%',
                        marginTop: '10px',
                        height: '30px',
                        border: 'none',
                      }}
                    />
                  </div>
                  <div style={{ marginTop: '20px' }}>
                    <label htmlFor='numFour'>מספר מוטב מספר רב ספק</label>
                    <input
                      type='number'
                      id='numFour'
                      style={{
                        width: '100%',
                        marginTop: '10px',
                        height: '30px',
                        border: 'none',
                      }}
                    />
                  </div>
                  <h2 style={{ fontWeight: '900', marginTop: '4rem' }}>
                    הגדרות מכשיר
                  </h2>
                  <div style={{ marginTop: '20px' }}>
                    <input
                      type='checkbox'
                      id='checkedFive'
                      style={{
                        marginTop: '10px',
                        marginLeft: '10px',
                        border: 'none',
                      }}
                    />
                    <label htmlFor='checkedFive'>שלאמת קוד איתחול</label>
                  </div>
                  <div style={{ marginTop: '20px' }}>
                    <input
                      type='checkbox'
                      id='checkedThree'
                      style={{
                        marginTop: '10px',
                        marginLeft: '10px',
                        border: 'none',
                      }}
                    />
                    <label htmlFor='checkedThree'>
                      להחזיר מספר כרטיס בתשובה ל12 (נתמך בגרסה 14 ומעלה)
                    </label>
                  </div>
                  <div style={{ marginTop: '20px' }}>
                    <label>לחזיר מספר כרטים בתשובה ל12 לפרויקט</label>
                    <div style={{ marginTop: '10px' }}>
                      <Dropdown />
                    </div>
                  </div>
                  <div style={{ marginTop: '20px' }}>
                    <label>ממשק</label>
                    <div style={{ marginTop: '10px' }}>
                      <Dropdown />
                    </div>
                  </div>
                  <div style={{ marginTop: '20px' }}>
                    <input
                      type='checkbox'
                      id='checkedSix'
                      style={{
                        marginTop: '10px',
                        marginLeft: '10px',
                        border: 'none',
                      }}
                    />
                    <label htmlFor='checkedSix'>
                      להחזיר מספר כרטיס בתשובה ל12 (נתמך בגרסה 14 ומעלה)
                    </label>
                  </div>
                  <div style={{ marginTop: '20px' }}>
                    <label htmlFor='numFive'>unattended עמדה לא מאוישת</label>
                    <input
                      type='text'
                      id='numFive'
                      style={{
                        width: '100%',
                        marginTop: '10px',
                        height: '30px',
                        border: 'none',
                      }}
                    />
                  </div>
                  <div style={{ marginTop: '20px' }}>
                    <label>בית התוכנה</label>
                    <div style={{ marginTop: '10px' }}>
                      <Dropdown />
                    </div>
                  </div>
                  <div style={{ marginTop: '20px' }}>
                    <label htmlFor='numSix'>unattended עמדה לא מאוישת</label>
                    <input
                      type='text'
                      id='numSix'
                      style={{
                        width: '100%',
                        marginTop: '10px',
                        height: '30px',
                        border: 'none',
                      }}
                    />
                  </div>
                  <h2 style={{ fontWeight: '900', marginTop: '4rem' }}>
                    הגדרות TMS
                  </h2>
                  <h4>IP address</h4>
                  <h4>Port</h4>
                  <span style={{ color: 'grey', marginRight: '20px' }}>80</span>
                  <span style={{ color: 'grey', marginRight: '20px' }}>
                    34.252.81.190
                  </span>
                  <h2 style={{ fontWeight: '900', marginTop: '4rem' }}>
                    הגדרות תפעול פלאקארד
                  </h2>
                  <div style={{ marginTop: '20px' }}>
                    <input
                      type='checkbox'
                      id='checkedSix'
                      style={{
                        marginTop: '10px',
                        marginLeft: '10px',
                        border: 'none',
                      }}
                    />
                    <label htmlFor='checkedSix'>ZFL</label>
                  </div>
                  <Button
                    className='DeviceSystem__head-submit-btn'
                    sx={{
                      backgroundColor: '#54bc77',
                      borderRadius: '0px',
                      color: 'white',
                      marginTop: '3rem',
                    }}
                    variant='text'
                  >
                    המכשיר- פעיל
                  </Button>
                </form>
              </Box>
            </div>
          </Grid>
          <Grid item lg={6}>
            <div
              style={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <div>
                <div style={{ border: '1px solid #e5e5e5', borderTop: 'none' }}>
                  <Box sx={{ width: 1 }} className='vega__header'>
                    <h2 style={{ fontWeight: '400', marginBottom: '0px' }}>
                      VEGA3000P
                    </h2>
                  </Box>
                  <div style={{ backgroundColor: 'white' }}>
                    <Box className='vega__para'>
                      <div style={{ textAlign: 'center', paddingTop: '25px' }}>
                        <img
                          src={Img2}
                          style={{ maxWidth: '100%' }}
                          alt='mobile'
                        ></img>
                      </div>
                      <h4 style={{ textAlign: 'center' }}>
                        באפשרותך לסגור מכשיר בכל עת מרגע שהמכשיר נסגר לא ניתן
                        יהי
                      </h4>
                    </Box>
                    <Grid container>
                      <Grid item lg={4} md={4} sm={5} xs={5}>
                        <Box
                          className='vega-text'
                          sx={{ paddingRight: '40px' }}
                        >
                          <h4>:“STID </h4>
                          <h4>:M1DIN NOW</h4>
                          <h4>:JNUIWN niTan </h4>
                          <h4>:JNUIWN niTan </h4> <br />
                          <h4>:JNUIWN niTan </h4>
                        </Box>
                      </Grid>
                      <Grid item lg={8} md={8} sm={7} xs={7}>
                        <Box
                          className='vega-text'
                          sx={{
                            color: 'gray',
                            fontWeight: '500',
                          }}
                        >
                          <h5 style={{ fontWeight: '500' }}>
                            12:14:03 12/01/2023{' '}
                          </h5>
                          <h5 style={{ fontWeight: '500' }}>
                            VEGA3000P PCI ETHERNET CONTACTLESS{' '}
                          </h5>
                          <h5 style={{ fontWeight: '500' }}>2.10 </h5>
                          <h5 style={{ fontWeight: '500' }}>
                            TOSAPI:VRAQ41-20200814
                            <br />
                            ROOTFS:VR1420-20220606 <br />
                            EMV:VRO011-20170123 <br />
                            EMVCL:VRA316-20181002{' '}
                          </h5>
                          <h5 style={{ fontWeight: '500' }}>
                            ETHERNET:1/2.168.1.72-M255.255.255.0- <br />
                            DG172.168.1.254
                          </h5>
                        </Box>
                      </Grid>
                    </Grid>
                  </div>

                  <Box className='amin__container'>
                    <p style={{ margin: '0px', paddingTop: '20px' }}>
                      VWOINN AMIN 0999 DIN )
                    </p>
                    <div sx={{ textAlign: 'start' }} className='amin__main'>
                      <Item className='colorr'>
                        <h4 style={{ marginTop: '5px' }}>
                          :1TD1'D'2 JINN'N Tip{' '}
                        </h4>
                        <h4 style={{ textAlign: 'start' }}>‘nppA PANN </h4>
                      </Item>
                      <Item className='colorr' sx={{ textAlign: 'start' }}>
                        <h5 style={{ fontWeight: '700', marginTop: '7px' }}>
                          {' '}
                          8661
                        </h5>
                        <h5 style={{ fontWeight: '700' }}>12/01/2023 </h5>
                      </Item>
                    </div>
                  </Box>
                </div>
                <Box
                  sx={{
                    width: 1,
                    border: ' 1px solid #e5e5e5',
                    borderTop: 'none',
                    marginTop: ' 30px',
                  }}
                >
                  <Item
                    style={{
                      background: ' #eff3f5',

                      borderTop: '5px solid #a0ced6',
                      paddingRight: '30px',
                    }}
                    className='nova__container'
                  >
                    <h4>'ODIDIN NOVA IDTV </h4>
                  </Item>
                  <Item
                    sx={{
                      padding: '20px',
                    }}
                  >
                    <p
                      style={{
                        textAlign: 'start',
                        fontWeight: 'bold',
                        paddingRight: '10px',
                      }}
                    >
                      ‘ATMUAD AOA{' '}
                    </p>
                    <select
                      dir='rtl'
                      className='form-select'
                      style={{
                        width: '100%',
                        padding: '10px',
                        outline: 'none',
                      }}
                    >
                      <option>gilgitt</option>
                      <option>gilgitt</option>
                      <option>gilgitt</option>
                    </select>
                    <p style={{ textAlign: 'start', fontWeight: 'bold' }}>
                      ND :3'VO |IDTY{' '}
                    </p>
                  </Item>
                </Box>
                <Box
                  sx={{
                    width: 1,
                    border: ' 1px solid #e5e5e5',
                    borderTop: 'none',
                    marginTop: ' 30px',
                  }}
                >
                  <Item
                    style={{
                      marginTop: '30px',
                      background: ' #eff3f5',
                      textAlign: 'start',
                      paddingRight: '30px',
                      borderTop: '5px solid #a0ced6',
                    }}
                    className='nova__container'
                  >
                    <h4>VWOD WAO </h4>
                  </Item>
                  <Item style={{ textAlign: 'start', paddingRight: '30px' }}>
                    <h5 style={{ fontwight: 'bold' }}>
                      n! yn ND a0] TwONAW yan Ny 992 7wWIN Wad WNNW9NI <br />
                      ND1WwnNa winn innpnd Ty win'w 1m niwy)d{' '}
                    </h5>
                    <Button
                      variant='contained'
                      style={{ backgroundColor: '#f07676', padding: '10px' }}
                    >
                      O1F8:
                    </Button>
                  </Item>
                </Box>
                <Box
                  sx={{
                    width: 1,
                    border: ' 1px solid #e5e5e5',
                    borderTop: 'none',
                    marginTop: ' 30px',
                  }}
                >
                  <Item
                    style={{
                      marginTop: '30px',
                      background: ' #eff3f5',
                      textAlign: 'start',
                      paddingRight: '30px',
                      borderTop: '5px solid #a0ced6',
                    }}
                    className='nova__container'
                  >
                    <h3>Audit Log </h3>
                  </Item>
                  <Item style={{ textAlign: 'center' }}>
                    <textarea
                      className='vega-textarea'
                      style={{
                        width: '94%',
                        fontWeight: 'bold',
                        border: '1px solid #e5e5e5',
                        outline: 'none',
                      }}
                      dir='rtl'
                      rows='10'
                      cols='80'
                      placeholder='Setting billing to 3 - 12.01
                  sn was NONE changed to 0222407213 - 12.01 '
                    ></textarea>
                  </Item>
                </Box>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default CenterContent
