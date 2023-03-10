import React from 'react'
import './deviceSystem-form.css'

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
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

function DeviceSystemForm() {
  return (
    <>
      <Box>
        <Container
          className='DeviceSystem-container'
          sx={{ backgroundColor: '#e2e6e9' }}
        >
          <Grid container spacing={10}>
            <Grid item md={6} sm={12} xs={12}>
              <div
                style={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <div>
                  <div
                    style={{ border: '1px solid #e5e5e5', borderTop: 'none' }}
                  >
                    <Box sx={{ width: 1 }} className='vega__header'>
                      <h2 style={{ fontWeight: '400', marginBottom: '0px' }}>
                        VEGA3000P
                      </h2>
                    </Box>
                    <div style={{ backgroundColor: 'white' }}>
                      <Box className='vega__para'>
                        <div
                          style={{ textAlign: 'center', paddingTop: '25px' }}
                        >
                          <img
                            src={Img2}
                            style={{ maxWidth: '100%' }}
                            alt='mobile'
                          ></img>
                        </div>
                        <h4 style={{ textAlign: 'center' }}>
                          ???????????????? ?????????? ?????????? ?????? ???? ???????? ?????????????? ???????? ???? ????????
                          ??????
                        </h4>
                      </Box>
                      <Grid container>
                        <Grid item lg={8} md={8} sm={7} xs={7}>
                          <Box
                            className='vega-text'
                            sx={{
                              textAlign: 'end',
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
                        <Grid item lg={4} md={4} sm={5} xs={5}>
                          <Box
                            className='vega-text'
                            sx={{ textAlign: 'end', paddingRight: '40px' }}
                          >
                            <h4>:???STID </h4>
                            <h4>:M1DIN NOW</h4>
                            <h4>:JNUIWN niTan </h4>
                            <h4>:JNUIWN niTan </h4> <br />
                            <h4>:JNUIWN niTan </h4>
                          </Box>
                        </Grid>
                      </Grid>
                    </div>

                    <Box className='amin__container'>
                      <p style={{ margin: '0px', paddingTop: '20px' }}>
                        VWOINN AMIN 0999 DIN )
                      </p>
                      <div sx={{ textAlign: 'end' }} className='amin__main'>
                        <Item className='colorr' sx={{ textAlign: 'end' }}>
                          <h5 style={{ fontWeight: '700', marginTop: '7px' }}>
                            {' '}
                            8661
                          </h5>
                          <h5 style={{ fontWeight: '700' }}>12/01/2023 </h5>
                        </Item>
                        <Item className='colorr'>
                          <h4 style={{ marginTop: '5px' }}>
                            :1TD1'D'2 JINN'N Tip{' '}
                          </h4>
                          <h4>???nppA PANN </h4>
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
                        textAlign: 'end',

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
                          textAlign: 'end',
                          fontWeight: 'bold',
                          paddingRight: '10px',
                        }}
                      >
                        ???ATMUAD AOA{' '}
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
                      <p style={{ textAlign: 'end', fontWeight: 'bold' }}>
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
                        textAlign: 'end',
                        paddingRight: '30px',
                        borderTop: '5px solid #a0ced6',
                      }}
                      className='nova__container'
                    >
                      <h4>VWOD WAO </h4>
                    </Item>
                    <Item style={{ textAlign: 'end', paddingRight: '30px' }}>
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
                        textAlign: 'end',
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
            <Grid item md={6} sm={12} xs={12} style={{ textAlign: 'right' }}>
              <div className='DeviceSytem__form-head'>
                <h2 style={{ fontWeight: '900' }}>???????????? ??????????</h2>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                  }}
                >
                  <span style={{ color: 'grey' }}>???????????? ??????????</span>
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
                      ?????? ????
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
                      ????
                    </Button>
                  </div>
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
                        ???? ?????????? )- ?????????? ???? ???? ????????????)
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
                        placeholder='???????? ???????? - ????????????????'
                      />
                    </div>
                    <div style={{ marginTop: '20px' }}>
                      <label>????????????????</label>
                      <div style={{ marginTop: '10px' }}>
                        <Dropdown />
                      </div>
                    </div>
                    <div style={{ marginTop: '20px' }}>
                      <label htmlFor='phone'>???????? ??????????</label>
                      <input
                        type='text'
                        id='Phone'
                        style={{
                          width: '100%',
                          marginTop: '10px',
                          height: '30px',
                          border: 'none',
                        }}
                        placeholder='???????? ??????????'
                      />
                    </div>
                    <div style={{ marginTop: '20px' }}>
                      <label>????????</label>
                      <div style={{ marginTop: '10px' }}>
                        <Dropdown />
                      </div>
                    </div>
                    <div style={{ marginTop: '20px' }}>
                      <label>?????? ????????</label>
                      <div style={{ marginTop: '10px' }}>
                        <Dropdown />
                      </div>
                    </div>
                    <div style={{ marginTop: '20px' }}>
                      <label htmlFor='phone'>??????????</label>
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
                      <label>??????????</label>
                      <div style={{ marginTop: '10px' }}>
                        <Dropdown />
                      </div>
                    </div>
                    <div style={{ marginTop: '20px' }}>
                      <label htmlFor='number'>?????? ????????</label>
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
                      <label htmlFor='checkedOne'>
                        ?????????? ???????????? CTLS (???????? ?????????? 0.43 ??????????(
                      </label>
                      <input
                        type='checkbox'
                        id='checkedOne'
                        style={{
                          marginTop: '10px',
                          marginLeft: '10px',
                          border: 'none',
                        }}
                      />
                    </div>
                    <div style={{ marginTop: '20px' }}>
                      <label htmlFor='checkedTwo'>
                        ?? ?????????? ???????????? ???????????? (???????? ?????????? 1 ??????????)
                      </label>
                      <input
                        type='checkbox'
                        id='checkedTwo'
                        style={{
                          marginTop: '10px',
                          marginLeft: '10px',
                          border: 'none',
                        }}
                      />
                    </div>
                    <div style={{ marginTop: '20px' }}>
                      <label htmlFor='checkedThree'>
                        ???????? ?????? ???? ?????????? ???????????? ???????????? ??????
                      </label>
                      <input
                        type='checkbox'
                        id='checkedThree'
                        style={{
                          marginTop: '10px',
                          marginLeft: '10px',
                          border: 'none',
                        }}
                      />
                    </div>
                    <h2 style={{ fontWeight: '900', marginTop: '4rem' }}>
                      ???????????? ??????????
                    </h2>
                    <h3 style={{ fontWeight: '900', color: 'grey' }}>
                      ???????????? ??????????
                    </h3>
                    <h4 style={{ fontWeight: '900', color: 'grey' }}>
                      5753202
                    </h4>
                    <div style={{ marginTop: '20px' }}>
                      <label htmlFor='num'>???????? ????????</label>
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
                      <label htmlFor='numFour'>???????? ???????? ???????? ???? ??????</label>
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
                      ???????????? ??????????
                    </h2>
                    <div style={{ marginTop: '20px' }}>
                      <label htmlFor='checkedFive'>?????????? ?????? ????????????</label>
                      <input
                        type='checkbox'
                        id='checkedFive'
                        style={{
                          marginTop: '10px',
                          marginLeft: '10px',
                          border: 'none',
                        }}
                      />
                    </div>
                    <div style={{ marginTop: '20px' }}>
                      <label htmlFor='checkedThree'>
                        ???????????? ???????? ?????????? ???????????? ??12 (???????? ?????????? 14 ??????????)
                      </label>
                      <input
                        type='checkbox'
                        id='checkedThree'
                        style={{
                          marginTop: '10px',
                          marginLeft: '10px',
                          border: 'none',
                        }}
                      />
                    </div>
                    <div style={{ marginTop: '20px' }}>
                      <label>?????????? ???????? ?????????? ???????????? ??12 ??????????????</label>
                      <div style={{ marginTop: '10px' }}>
                        <Dropdown />
                      </div>
                    </div>
                    <div style={{ marginTop: '20px' }}>
                      <label>????????</label>
                      <div style={{ marginTop: '10px' }}>
                        <Dropdown />
                      </div>
                    </div>
                    <div style={{ marginTop: '20px' }}>
                      <label htmlFor='checkedSix'>
                        ???????????? ???????? ?????????? ???????????? ??12 (???????? ?????????? 14 ??????????)
                      </label>
                      <input
                        type='checkbox'
                        id='checkedSix'
                        style={{
                          marginTop: '10px',
                          marginLeft: '10px',
                          border: 'none',
                        }}
                      />
                    </div>
                    <div style={{ marginTop: '20px' }}>
                      <label htmlFor='numFive'>unattended ???????? ???? ????????????</label>
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
                      <label>?????? ????????????</label>
                      <div style={{ marginTop: '10px' }}>
                        <Dropdown />
                      </div>
                    </div>
                    <div style={{ marginTop: '20px' }}>
                      <label htmlFor='numSix'>unattended ???????? ???? ????????????</label>
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
                      ???????????? TMS
                    </h2>
                    <h4>IP address</h4>
                    <h4>Port</h4>
                    <span style={{ color: 'grey', marginRight: '20px' }}>
                      80
                    </span>
                    <span style={{ color: 'grey', marginRight: '20px' }}>
                      34.252.81.190
                    </span>
                    <h2 style={{ fontWeight: '900', marginTop: '4rem' }}>
                      ???????????? ?????????? ??????????????
                    </h2>
                    <div style={{ marginTop: '20px' }}>
                      <label htmlFor='checkedSix'>ZFL</label>
                      <input
                        type='checkbox'
                        id='checkedSix'
                        style={{
                          marginTop: '10px',
                          marginLeft: '10px',
                          border: 'none',
                        }}
                      />
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
                      ????????????- ????????
                    </Button>
                  </form>
                </Box>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
}

export default DeviceSystemForm
